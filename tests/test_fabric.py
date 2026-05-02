import os
import sys

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../src")))

from fabric import Fabric
from services import FabricService
from supplier import Supplier


def test_fabric_initial_state():
    supplier = Supplier("Test Supplier")
    fabric = Fabric("Cotton", "White", 100, supplier)

    assert fabric.fabric_type == "Cotton"
    assert fabric.color == "White"
    assert fabric.total_meter == 100
    assert fabric.available_meter() == 100
    assert fabric.state.name() == "In Stock"


def test_fabric_usage_reduces_available_meter():
    supplier = Supplier("Test Supplier")
    fabric = Fabric("Cotton", "White", 100, supplier)

    fabric.use_fabric(30)

    assert fabric.used_meter == 30
    assert fabric.available_meter() == 70


def test_quality_approval_changes_state():
    supplier = Supplier("Test Supplier")
    fabric = Fabric("Cotton", "White", 100, supplier)
    service = FabricService()

    service.send_to_quality_control(fabric)
    service.approve_quality(fabric)

    assert fabric.state.name() == "Approved"
    assert fabric.quality_approved is True
    assert supplier.approved_deliveries == 1


def test_quality_rejection_changes_state():
    supplier = Supplier("Test Supplier")
    fabric = Fabric("Cotton", "White", 100, supplier)
    service = FabricService()

    service.send_to_quality_control(fabric)
    service.reject_quality(fabric)

    assert fabric.state.name() == "Rejected"
    assert fabric.quality_approved is False
    assert supplier.rejected_deliveries == 1
    