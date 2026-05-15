---
title: Purge KDE Plasma (Arch Linux)
description: Fully remove KDE Plasma and related components from an Arch Linux system.
---

# ⚠️ Warning

This guide will completely remove KDE Plasma from your system.

Make sure you have:
- A working TTY (Ctrl + Alt + F3 works)
- Either another desktop environment installed OR comfort using terminal-only recovery

Do NOT proceed if you are unsure.

---

# 🎯 What this removes

This process removes:

- KDE Plasma desktop environment
- KDE application suite
- SDDM display manager (if installed)
- KDE user configuration files

It does NOT:
- Delete your home directory
- Remove unrelated desktop environments
- Break base Arch system if followed correctly

---

# 📦 Step 1 — Remove KDE packages

Remove the main KDE groups:

```bash
sudo pacman -Rns plasma-meta kde-applications

---

# 🔍 Step 2 — Check for leftover KDE packages

Search remaining packages:

```bash
pacman -Qs plasma
pacman -Qs kde

If anything is still installed, remove it manually:

```bash
sudo pacman -Rns package-name

---

# ⚙️ Step 3 — Remove SDDM (if used)

Check status:

```bash
systemctl status sddm

Stop and disable:

```bash
sudo systemctl disable sddm
sudo systemctl stop sddm

Remove it:

```bash
sudo pacman -Rns sddm

---

# 🧹 Step 4 — Remove user KDE configuration (optional)

This resets KDE settings completely:

```bash
rm -rf ~/.config/plasma*
rm -rf ~/.config/kde*
rm -rf ~/.local/share/plasma*
rm -rf ~/.cache/*

---

# 🧽 Step 5 — Remove orphan packages

```bash
sudo pacman -Rns $(pacman -Qdtq)

---

# ✅ Step 6 — Verify removal

Check if Plasma still exists:

```bash
ls /usr/share/xsessions | grep plasma

If nothing returns, KDE is removed.

---

# 🧠 Notes

- This does NOT remove your personal files
- This can be reversed by reinstalling KDE
- Most system functionality remains intact
