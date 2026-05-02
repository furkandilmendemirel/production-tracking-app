import os
import sys

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../src")))

from fabric import Fabric
from services import FabricService
from supplier import Supplier


def test_fabric_initial_state_is_pending():
    supplier = Supplier("Test Supplier")
    fabric = Fabric("Cotton", "White", 100, supplier)

    assert fabric.fabric_type == "Cotton"
    assert fabric.color == "White"
    assert fabric.total_meter == 100
    assert fabric.available_meter() == 100
    assert fabric.status() == "Pending"


def test_fabric_moves_from_pending_to_processing():
    supplier = Supplier("Test Supplier")
    fabric = Fabric("Cotton", "White", 100, supplier)

    fabric.move_next_state()

    assert fabric.status() == "Processing"


def test_fabric_moves_from_processing_to_quality_check():
    supplier = Supplier("Test Supplier")
    fabric = Fabric("Cotton", "White", 100, supplier, "Processing")

    fabric.move_next_state()

    assert fabric.status() == "Quality Check"


def test_fabric_moves_from_quality_check_to_completed():
    supplier = Supplier("Test Supplier")
    fabric = Fabric("Cotton", "White", 100, supplier, "Quality Check")

    fabric.move_next_state()

    assert fabric.status() == "Completed"


def test_completed_fabric_stays_completed():
    supplier = Supplier("Test Supplier")
    fabric = Fabric("Cotton", "White", 100, supplier, "Completed")

    fabric.move_next_state()

    assert fabric.status() == "Completed"


def test_fabric_usage_reduces_available_meter():
    supplier = Supplier("Test Supplier")
    fabric = Fabric("Cotton", "White", 100, supplier)

    fabric.use_fabric(30)

    assert fabric.used_meter == 30
    assert fabric.available_meter() == 70


def test_create_cutting_plan_for_processing_fabric():
    supplier = Supplier("Test Supplier")
    fabric = Fabric("Cotton", "White", 100, supplier, "Processing")
    service = FabricService()

    plan = service.create_cutting_plan(fabric, 25, "Test Model")

    assert plan is not None
    assert fabric.used_meter == 25
    assert fabric.available_meter() == 75
