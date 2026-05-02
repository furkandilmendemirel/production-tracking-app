# Known Issues and Technical Debt

## 1. No persistent database yet

**Problem:** The current system stores fabric and supplier data in memory.

**Reason:** The first version focuses on object-oriented design and production workflow modeling.

**Risk:** Data is lost when the program stops.

**Future Fix:** Add SQLite or PostgreSQL persistence.

**OWASP Mapping:** A08 Software or Data Integrity Failures

---

## 2. No authentication and authorization

**Problem:** The current version does not include user login, authentication, or role-based access control.

**Reason:** The current version is a console-based prototype.

**Risk:** If this becomes a web application, unauthorized users could access or modify production data.

**Future Fix:** Add authentication and role-based permissions.

**OWASP Mapping:** A01 Broken Access Control, A07 Authentication Failures

---

## 3. Limited input validation

**Problem:** Some invalid values should be handled more strictly.

**Reason:** The initial implementation focuses on the production workflow and State Design Pattern.

**Risk:** Invalid production data may enter the system.

**Future Fix:** Add stronger validation and exception handling.

**OWASP Mapping:** A05 Injection, A10 Mishandling of Exceptional Conditions

---

## 4. Dependabot alerts disabled

**Problem:** Dependabot alerts are disabled in the current repository security overview.

**Reason:** Dependency monitoring has not been fully enabled yet.

**Risk:** Vulnerable dependencies may not be detected automatically.

**Future Fix:** Enable Dependabot alerts and review dependency alerts regularly.

**OWASP Mapping:** A03 Software Supply Chain Failures

---

## 5. Security policy disabled

**Problem:** The repository does not currently include a security reporting policy.

**Reason:** SECURITY.md has not been added yet.

**Risk:** Users or contributors may not know how to report security vulnerabilities.

**Future Fix:** Add a SECURITY.md file with vulnerability reporting instructions.

**OWASP Mapping:** A06 Insecure Design
