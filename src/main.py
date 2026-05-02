from fabric import Fabric
from services import FabricService, SupplierService
from supplier import Supplier


def main():
    fabric_service = FabricService()
    supplier_service = SupplierService()

    supplier1 = Supplier("Deniz Textile")
    supplier2 = Supplier("Ege Fabric")
    supplier3 = Supplier("Akdeniz Textile")

    supplier_service.add_supplier(supplier1)
    supplier_service.add_supplier(supplier2)
    supplier_service.add_supplier(supplier3)

    fabric1 = Fabric("Cotton", "White", 120, supplier1, "Pending")
    fabric2 = Fabric("Linen", "Black", 80, supplier2, "Processing")
    fabric3 = Fabric("Denim", "Blue", 150, supplier3, "Quality Check")
    fabric4 = Fabric("Wool", "Gray", 60, supplier1, "Completed")

    fabric_service.add_fabric(fabric1)
    fabric_service.add_fabric(fabric2)
    fabric_service.add_fabric(fabric3)
    fabric_service.add_fabric(fabric4)

    print("\nINITIAL PROJECT STATUS")
    fabric_service.show_dashboard()
    fabric_service.show_tracking_table()

    print("\nMOVING FABRICS TO NEXT STAGE")
    fabric_service.move_to_next_stage(fabric1)
    fabric_service.move_to_next_stage(fabric2)
    fabric_service.move_to_next_stage(fabric3)
    fabric_service.move_to_next_stage(fabric4)

    print("\nCREATING CUTTING PLAN")
    cutting_plan = fabric_service.create_cutting_plan(
        fabric2,
        25,
        "Summer Shirt Model A"
    )

    if cutting_plan is not None:
        cutting_plan.show_plan()

    print("\nUPDATED PROJECT STATUS")
    fabric_service.show_dashboard()
    fabric_service.show_tracking_table()

    fabric_service.show_stock_by_type()
    supplier_service.show_supplier_performance()

    print("\nFABRIC HISTORY")
    for item in fabric1.history:
        print(item)


if __name__ == "__main__":
    main()
