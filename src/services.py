from src.fabric import CuttingPlan


class FabricService:
    def __init__(self):
        self.fabrics = []

    def add_fabric(self, fabric):
        self.fabrics.append(fabric)

    def find_fabric_by_barcode(self, barcode):
        for fabric in self.fabrics:
            if fabric.barcode == barcode:
                return fabric

        return None

    def move_to_next_stage(self, fabric):
        if fabric.status() == "Completed":
            print(f"{fabric.barcode} is already completed.")
            return

        fabric.move_next_state()
        print(f"{fabric.barcode} moved to {fabric.status()}.")

    def create_cutting_plan(self, fabric, meter, model_name):
        if fabric.status() not in ["Processing", "Quality Check"]:
            print("Cutting plan can only be created for fabrics in Processing or Quality Check stage.")
            return None

        is_used = fabric.use_fabric(meter)

        if not is_used:
            return None

        plan = CuttingPlan(model_name, fabric, meter)
        fabric.add_history(f"Cutting plan created. Model: {model_name}")

        return plan

    def show_inventory(self):
        print("\nINVENTORY LIST")

        for fabric in self.fabrics:
            fabric.show_info()

    def show_tracking_table(self):
        print("\n================ FABRIC TRACKING TABLE ================")
        print(
            f"{'Barcode':<14}"
            f"{'Type':<14}"
            f"{'Color':<12}"
            f"{'Supplier':<20}"
            f"{'Stock(m)':<12}"
            f"{'Status':<18}"
            f"{'Badge':<10}"
        )
        print("-" * 100)

        for fabric in self.fabrics:
            print(
                f"{fabric.barcode:<14}"
                f"{fabric.fabric_type:<14}"
                f"{fabric.color:<12}"
                f"{fabric.supplier.name:<20}"
                f"{fabric.available_meter():<12}"
                f"{fabric.status():<18}"
                f"{fabric.badge_color():<10}"
            )

        print("=" * 100)

    def show_dashboard(self):
        total_fabric_rolls = len(self.fabrics)
        total_stock = sum(fabric.available_meter() for fabric in self.fabrics)

        pending_count = sum(1 for fabric in self.fabrics if fabric.status() == "Pending")
        processing_count = sum(1 for fabric in self.fabrics if fabric.status() == "Processing")
        quality_check_count = sum(1 for fabric in self.fabrics if fabric.status() == "Quality Check")
        completed_count = sum(1 for fabric in self.fabrics if fabric.status() == "Completed")

        print("\n========== DASHBOARD ==========")
        print("Total Fabric Rolls :", total_fabric_rolls)
        print("Total Stock        :", total_stock, "meters")
        print("Pending            :", pending_count)
        print("Processing         :", processing_count)
        print("Quality Check      :", quality_check_count)
        print("Completed          :", completed_count)
        print("===============================")

    def show_stock_by_type(self):
        stock = {}

        for fabric in self.fabrics:
            if fabric.fabric_type not in stock:
                stock[fabric.fabric_type] = 0

            stock[fabric.fabric_type] += fabric.available_meter()

        print("\nSTOCK BY FABRIC TYPE")

        for fabric_type, meter in stock.items():
            print(fabric_type, ":", meter, "meters")


class SupplierService:
    def __init__(self):
        self.suppliers = []

    def add_supplier(self, supplier):
        self.suppliers.append(supplier)

    def show_supplier_performance(self):
        print("\nSUPPLIER PERFORMANCE")

        for supplier in self.suppliers:
            print("--------------------------------")
            print("Supplier:", supplier.name)
            print("Total Deliveries:", supplier.total_deliveries)
            print("Completed Deliveries:", supplier.completed_deliveries)
            print("Performance Score:", round(supplier.performance_score(), 2), "%")
            print("--------------------------------")
