import uuid


class Supplier:
    def __init__(self, name):
        self.id = str(uuid.uuid4())[:8]
        self.name = name
        self.total_deliveries = 0
        self.approved_deliveries = 0
        self.rejected_deliveries = 0

    def record_delivery(self, approved):
        self.total_deliveries += 1

        if approved:
            self.approved_deliveries += 1
        else:
            self.rejected_deliveries += 1

    def quality_score(self):
        if self.total_deliveries == 0:
            return 0

        return (self.approved_deliveries / self.total_deliveries) * 100
