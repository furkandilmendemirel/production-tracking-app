from projects.fabric import Fabric
from projects.supplier import Supplier
from projects.services import TrackingService


supplier1 = Supplier("S001", "ABC Textile", "Turkey", "contact@abc.com")

fabric1 = Fabric("F001", "Cotton", "Black", "Turkey")
fabric2 = Fabric("F002", "Linen", "White", "Italy")

tracking_service = TrackingService()

tracking_service.add_fabric(fabric1)
tracking_service.add_fabric(fabric2)

print("\nSupplier Information:")
supplier1.show_info()

print("\nAll Fabrics:")
tracking_service.show_all_fabrics()

print("\nUpdating Fabric Status:")
tracking_service.update_fabric_status("F001")
tracking_service.update_fabric_status("F001")
tracking_service.update_fabric_status("F001")

print("\nUpdated Fabric Information:")
fabric1.show_info()

print("\nFabric History:")
fabric1.show_history()
