from datetime import datetime
import uuid

from states import create_state


class Fabric:
    def __init__(self, fabric_type, color, meter, supplier, status="Pending"):
        self.barcode = self.generate_barcode()
        self.fabric_type = fabric_type
        self.color = color
        self.total_meter = meter
        self.used_meter = 0
        self.supplier = supplier
        self.state = create_state(status)
        self.history = []

        self.supplier.record_delivery()
        self.add_history("Fabric was added to the system.")

    def generate_barcode(self):
        return "FAB-" + str(uuid.uuid4())[:8].upper()

    def status(self):
        return self.state.name()

    def badge_color(self):
        return self.state.badge_color()

    def available_meter(self):
        return self.total_meter - self.used_meter

    def move_next_state(self):
        old_state = self.state.name()
        self.state = self.state.next_state()
        new_state = self.state.name()

        self.add_history(f"State changed: {old_state} -> {new_state}")

        if new_state == "Completed":
            self.supplier.record_completed_delivery()

    def use_fabric(self, meter):
        if meter <= 0:
            print("Used meter must be greater than zero.")
            return False

        if meter > self.available_meter():
            print("Not enough fabric available.")
            return False

        self.used_meter += meter
        self.add_history(f"{meter} meters of fabric were used.")
        return True

    def add_history(self, message):
        date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        self.history.append(f"[{date}] {message}")

    def show_info(self):
        print("--------------------------------")
        print("Barcode:", self.barcode)
        print("Fabric Type:", self.fabric_type)
        print("Color:", self.color)
        print("Total Meter:", self.total_meter)
        print("Used Meter:", self.used_meter)
        print("Available Meter:", self.available_meter())
        print("Supplier:", self.supplier.name)
        print("Status:", self.status())
        print("Badge Color:", self.badge_color())
        print("--------------------------------")


class CuttingPlan:
    def __init__(self, model_name, fabric, required_meter):
        self.id = str(uuid.uuid4())[:8]
        self.model_name = model_name
        self.fabric = fabric
        self.required_meter = required_meter
        self.created_date = datetime.now()

    def show_plan(self):
        print("--------------------------------")
        print("Cutting Plan ID:", self.id)
        print("Model Name:", self.model_name)
        print("Fabric Barcode:", self.fabric.barcode)
        print("Required Meter:", self.required_meter)
        print("Created Date:", self.created_date)
        print("--------------------------------")
