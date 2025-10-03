# 🍲 Meals App: Recipe Discovery (React Native)

A mini cross-platform mobile application built with **React Native** and **Expo** that functions as a recipe discovery tool. Users can browse meals by category, view detailed ingredient lists and cooking steps, and save their favorite recipes.

This project focuses on robust mobile navigation using **React Navigation** and simple global state management via the **Context API**.

---

## ✨ Features

| Feature Area | Description |
| :--- | :--- |
| **🔍 Discovery** | Browse meals across 10 unique, colorful categories (Italian, Quick & Easy, Exotic, etc.). |
| **📜 Details** | Every meal has a dedicated screen showing **Ingredient List** and **Step-by-Step Cooking Instructions**. |
| **⭐ Favorites** | Easily **save or unsave** any meal using a header button, managed by the **Context API**. |
| **🧭 Navigation** | Uses a combination of **Stack** and **Drawer** navigators for a smooth user flow. |

---

## 🧭 Navigation Flow & Structure

The app's structure relies on **React Navigation's** Stack and Drawer components:

### 1. Root Navigation (Stack Navigator)

Handles the hierarchical screen flow:

-   `Drawer` (Home) → `MealsOverview` (List of meals) → `MealDetail` (Recipe details)

### 2. Drawer Navigation (Sidebar Menu)

Used at the root to switch between top-level views:

| Screen Name | Component | Icon |
| :--- | :--- | :--- |
| **Categories** | `CategoriesScreen` | ☰ |
| **Favorites** | `FavoritesScreen` | ⭐ |

### Screenshots

<img width="370" height="809" alt="Screenshot 2025-10-03 at 15 40 35" src="https://github.com/user-attachments/assets/f531adb0-cd85-4a12-8f2b-8c67063ff0a6" style="width:200px;"/>
<img width="366" height="804" alt="Screenshot 2025-10-03 at 15 40 52" src="https://github.com/user-attachments/assets/8bb5f930-7314-4d3f-932a-9e1b77e1cb4d" />
<img width="373" height="810" alt="Screenshot 2025-10-03 at 15 41 05" src="https://github.com/user-attachments/assets/9e1a5cfd-f609-44ff-84d5-0a502ae4851c" />
<img width="362" height="804" alt="Screenshot 2025-10-03 at 15 41 20" src="https://github.com/user-attachments/assets/33072774-ac76-4e11-a7fe-3f3d008f08cd" />
<img width="360" height="803" alt="Screenshot 2025-10-03 at 15 41 28" src="https://github.com/user-attachments/assets/45dace23-ee2e-4182-8601-40700194d54b" />
