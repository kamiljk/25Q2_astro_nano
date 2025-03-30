---
name: "README_work"
title: "Work Content Structure"
description: "Chronologically organized resume content, rendered into cards by Astro."
---

## 🪄 Modular Entry Templates

Each work experience lives in its own `.md` file in this directory, following the format below:

```yaml
---
name: "YYYYMM_company_role"
title: "Job Title"
company: "Company Name"
location: "City, State or Remote"
start: "YYYY-MM"
end: "YYYY-MM" or "present"
duration: "e.g., 2y7m"
role_type: "full-time / part-time / freelance / contract / learning"
category: "e.g., technical_support, media_buying"
tags: ["skill", "tool", "theme"]
scale: "micro / meso / macro"
maturity: "captured / curated / created / archived"
status: "active / inactive"
---
```

The content below the frontmatter should summarize the role: key responsibilities, accomplishments, and style aligned with your digital garden tone.

You can generate new files using this structure and slot them into the timeline and rendering system automatically.

This directory contains modular work history entries used to build individual cards on the site.

## 📁 File Naming Convention

Each file follows the pattern:

```
{YYYYMM}_{company}_{role}.md
```

- `YYYYMM`: Start date (zero-padded)
- `company`: lowercase kebab-case
- `role`: lowercase snake_case, concise title

### ✅ Examples

- `200501_ritz_sales_technician.md`
- `200801_kamiljk_photographer.md`
- `201007_apple_sales_specialist.md`
- `201204_apple_business_specialist.md`
- `201307_apple_family_room_specialist.md`
- `201307_apple_guest_trainer.md`
- `201507_apple_mac_support_technician.md`
- `202301_clicked_learning_member.md`
- `202305_starcom_associate.md`
- `202408_starcom_investment_analyst.md`

## 🧾 Full Work Index

Below is a complete index of all work entries intended for modular `.md` files.

---

### `200501_ritz_sales_technician.md`

```yaml
---
name: "200501_ritz_sales_technician"
title: "Sales & Lab Technician"
company: "Ritz Camera & Image"
location: "Chicago, IL"
start: "2005-01"
end: "2009-01"
duration: "4y"
role_type: "part-time"
category: "retail_photography"
tags: ["film_development", "photo_lab", "training", "inventory"]
scale: "micro"
maturity: "archived"
status: "inactive"
---
```

---

### `200801_kamiljk_photographer.md`

```yaml
---
name: "200801_kamiljk_photographer"
title: "Freelance Photographer"
company: "Kamil J. Krawczyk Photography"
location: "Greater Chicago Area"
start: "2008-01"
end: "2012-01"
duration: "4y"
role_type: "freelance"
category: "creative"
tags: ["photography", "studio_assist", "metadata", "client_work"]
scale: "micro"
maturity: "archived"
status: "inactive"
---
```

---

### `201007_apple_sales_specialist.md`

```yaml
---
name: "201007_apple_sales_specialist"
title: "Sales Specialist"
company: "Apple"
location: "Northbrook, IL"
start: "2010-07"
end: "2012-04"
duration: "1y10m"
role_type: "full-time"
category: "retail_sales"
tags: ["mentorship", "appointments", "training", "customer_relationships"]
scale: "micro"
maturity: "archived"
status: "inactive"
---
```

---

### `201204_apple_business_specialist.md`

```yaml
---
name: "201204_apple_business_specialist"
title: "Business Specialist"
company: "Apple"
location: "Northbrook, IL"
start: "2012-04"
end: "2013-07"
duration: "1y4m"
role_type: "full-time"
category: "b2b_sales"
tags: ["outreach", "stakeholder_engagement", "ecosystem_sales"]
scale: "micro"
maturity: "archived"
status: "inactive"
---
```

---

### `201307_apple_family_room_specialist.md`

```yaml
---
name: "201307_apple_family_room_specialist"
title: "Family Room Specialist"
company: "Apple"
location: "Northbrook, IL"
start: "2013-07"
end: "2015-07"
duration: "2y1m"
role_type: "full-time"
category: "technical_support"
tags: ["mobile_repairs", "inventory", "training", "data_migration"]
scale: "meso"
maturity: "archived"
status: "inactive"
---
```

---

### `201307_apple_guest_trainer.md`

```yaml
---
name: "201307_apple_guest_trainer"
title: "In-store Guest Trainer"
company: "Apple"
location: "Northbrook, IL"
start: "2013-07"
end: "2018-01"
duration: "4y7m"
role_type: "full-time"
category: "training_enablement"
tags: ["training", "certification", "onboarding", "nps"]
scale: "meso"
maturity: "archived"
status: "inactive"
---
```

---

### `201507_apple_mac_support_technician.md`

```yaml
---
name: "201507_apple_mac_support_technician"
title: "Mac Support Technician"
company: "Apple"
location: "Northbrook, IL"
start: "2015-07"
end: "2018-01"
duration: "2y7m"
role_type: "full-time"
category: "technical_support"
tags: ["hardware", "troubleshooting", "team_lead", "customer_experience"]
scale: "meso"
maturity: "archived"
status: "inactive"
---
```

---

### `202301_clicked_learning_member.md`

```yaml
---
name: "202301_clicked_learning_member"
title: "Clicked Learning Community Member"
company: "Clicked"
location: "Remote"
start: "2023-01"
end: "2023-04"
duration: "4m"
role_type: "learning"
category: "skills_training"
tags: ["salesforce", "data_analysis", "project_lifecycle", "business_process"]
scale: "micro"
maturity: "captured"
status: "inactive"
---
```

---

### `202305_starcom_associate.md`

```yaml
---
name: "202305_starcom_associate"
title: "Associate"
company: "Starcom"
location: "Chicago, IL"
start: "2023-05"
end: "2024-09"
duration: "1y5m"
role_type: "full-time"
category: "media_buying"
tags: ["social_media", "snapchat", "meta", "campaign_tracking", "budget"]
scale: "meso"
maturity: "curated"
status: "inactive"
---
```

---

### `202408_starcom_investment_analyst.md`

```yaml
---
name: "202408_starcom_investment_analyst"
title: "Investment Analyst"
company: "Starcom"
location: "Chicago, IL"
start: "2024-08"
end: "present"
duration: "ongoing"
role_type: "full-time"
category: "media_buying"
tags: ["snapchat", "tiktok", "meta", "tracking", "data_insights"]
scale: "macro"
maturity: "created"
status: "active"
---
```

## 📄 Frontmatter Schema

Each `.md` file begins with standardized YAML frontmatter:

```yaml
---
name: "201507_apple_mac_support_technician"
title: "Mac Support Technician"
company: "Apple"
location: "Northbrook, IL"
start: "2015-07"
end: "2018-01"
duration: "2y7m"
role_type: "full-time"
category: "technical_support"
tags: ["apple", "hardware", "team_lead", "diagnostics", "customer_experience"]
scale: "meso"
maturity: "archived"
status: "inactive"
---
```

### 🔍 Field Descriptions

| Field       | Description                                           |
|-------------|-------------------------------------------------------|
| `name`      | Matches filename (no `.md`)                           |
| `title`     | Displayed job title                                   |
| `company`   | Employer name                                         |
| `location`  | City, State                                           |
| `start`     | Start date (YYYY-MM)                                  |
| `end`       | End date or "present"                                 |
| `duration`  | Optional text summary                                 |
| `role_type` | "full-time", "freelance", "contract", etc.            |
| `category`  | Thematic grouping (e.g., "technical_support")         |
| `tags`      | Array of skills, tools, or themes                     |
| `scale`     | micro / meso / macro (role scope)                     |
| `maturity`  | captured / curated / created / archived               |
| `status`    | active / inactive                                     |

## 📞 Contact Information

- **Location:** Arlington Heights, IL  
- **Phone:** 630-947-4873  
- **Email:** [kamil.j.krawczyk@gmail.com](mailto:kamil.j.krawczyk@gmail.com)  
- **LinkedIn:** [linkedin.com/in/kamiljk](https://www.linkedin.com/in/kamiljk)  
- **Company:** [starcomww.com](https://www.starcomww.com)

## 🛠️ Skills & Tools

- **Platforms:** Meta Ads Manager, TikTok Ads, Snapchat, DCM, Salesforce, Excel, Looker Studio, Prisma  
- **Skills:** Campaign Execution, Ad Operations, Budget Management, Audience Strategy, Data QA, Process Design  
- **Soft Skills:** Cross-functional collaboration, Client communication, Training & mentorship, Systems thinking

## 🛠 Usage

Used by Astro to generate individual cards and potentially feed future timeline visualizations or filters based on tags, categories, or scale.
