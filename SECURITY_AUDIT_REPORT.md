# Security Audit Report

## Project Overview

The production-tracking-app repository contains a Python-based Fabric Production Tracking System. The system models textile production processes such as fabric inventory, supplier tracking, quality control, cutting planning, and production state transitions.

The project uses object-oriented programming and the State Design Pattern to manage fabric lifecycle states such as In Stock, Quality Control, Approved, Rejected, Cutting, Production, and Completed.

## Repository Structure

Current main structure:

- .github/
- diagrams/
- docs/
- frontend/
- screenshots/
- src/
- tests/
- .gitignore
- README.md
- requirements.txt
- KNOWN_ISSUES.md
- SECURITY_AUDIT_REPORT.md

## GitHub Security and Quality Review

The GitHub Security and Quality tab was reviewed.

Observed status:

- Security policy: Disabled
- Security advisories: Enabled
- Private vulnerability reporting: Disabled
- Dependabot alerts: Disabled
- Code scanning alerts: Enabled
- Secret scanning alerts: Enabled

## Code Scanning

Code scanning alerts are enabled for the repository. This means GitHub can automatically detect common vulnerabilities and coding errors through code scanning tools such as CodeQL.

**Remediation decision:** Monitor

**OWASP mapping:**

- A08 Software or Data Integrity Failures

## Dependabot

Dependabot alerts are disabled in the current repository security overview.

**Remediation decision:** Fix later

**OWASP mapping:**

- A03 Software Supply Chain Failures

## Secret Scanning

Secret scanning alerts are enabled. This is a positive security control because GitHub can detect accidentally committed secrets such as API keys, tokens, and credentials.

**Remediation decision:** Monitor

**OWASP mapping:**

- A03 Software Supply Chain Failures
- A04 Cryptographic Failures

## Manual Security Findings

| Finding | Evidence | OWASP 2025 Category | Decision | Explanation |
|---|---|---|---|---|
| Security policy disabled | GitHub Security tab | A06 Insecure Design | Fix later | The repository does not define how users should report vulnerabilities. |
| Private vulnerability reporting disabled | GitHub Security tab | A06 Insecure Design | Fix later | Users cannot privately report potential vulnerabilities. |
| Dependabot alerts disabled | GitHub Security tab | A03 Software Supply Chain Failures | Fix later | Dependency monitoring is not active. |
| Code scanning enabled | GitHub Security tab | A08 Software or Data Integrity Failures | Monitor | Code scanning should be reviewed regularly. |
| Secret scanning enabled | GitHub Security tab | A03 / A04 | Monitor | Secret scanning helps detect committed credentials. |
| No authentication layer | Manual code review | A01 Broken Access Control / A07 Authentication Failures | Fix later | The current version is a console-based prototype. |
| In-memory data storage | Manual code review | A08 Software or Data Integrity Failures | Fix later | Data is not persisted after the program stops. |
| Limited input validation | Manual code review | A05 Injection / A10 Mishandling of Exceptional Conditions | Fix later | More validation should be added before production use. |

## Conclusion

The repository contains the core implementation of the Fabric Production Tracking System. The audit identified several security and quality gaps, including missing security policy, disabled private vulnerability reporting, disabled Dependabot alerts, no authentication layer, in-memory data storage, and limited input validation.

Positive security controls include enabled Code scanning alerts and enabled Secret scanning alerts. Future improvements should focus on enabling Dependabot, adding a SECURITY.md policy, improving input validation, adding persistent storage, and implementing authentication and authorization if the system becomes production-ready.
