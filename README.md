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

<img width="590" height="1278" alt="IMG_2111" src="https://github.com/user-attachments/assets/ebb19fa1-1178-42b4-a17a-dcf15982ed72" style="width:200px;" />

<img width="590" height="1278" alt="IMG_2112" src="https://github.com/user-attachments/assets/e037124d-ab8c-4ddd-aa4c-205ab1022e9d" style="width:200px;"/>
<img width="590" height="1278" alt="IMG_2113" src="https://github.com/user-attachments/assets/647c3cf1-d7ad-4e69-b846-f1e73cfaf626" style="width:200px;"/>
<img width="590" height="1278" alt="IMG_2115" src="https://github.com/user-attachments/assets/69b8e298-1b0f-4783-b124-edf18380e828" style="width:200px;"/>
<img width="590" height="1278" alt="IMG_2116" src="https://github.com/user-attachments/assets/bf4d35ee-7570-4963-9f89-6d6b25b37f7c" style="width:200px;"/>
