---
title: Reinstall KDE Plasma (Arch Linux)
description: Clean reinstall of KDE Plasma with SDDM on Arch Linux.
---

# 🎯 Goal

This guide installs a fresh KDE Plasma desktop environment.

It includes:
- KDE Plasma desktop
- KDE applications (optional full suite)
- SDDM login manager
- basic desktop services

---

# 📦 Step 1 — Install KDE Plasma

Full install:

```bash
sudo pacman -S plasma-meta kde-applications
``` 

Minimal install:

```bash
sudo pacman -S plasma-desktop
``` 

---

# 🖥️ Step 2 — Install and enable SDDM

Install SDDM:

```bash
sudo pacman -S sddm
``` 

Enable it:

```bash
sudo systemctl enable sddm
``` 

Start it immediately (optional):

```bash
sudo systemctl start sddm
``` 

---

# 🌐 Step 3 — Enable networking

If using NetworkManager:

```bash
sudo systemctl enable NetworkManager
sudo systemctl start NetworkManager
``` 

---

# 🔊 Step 4 — Install audio stack (recommended)

PipeWire is standard on modern Arch setups:

```bash
sudo pacman -S pipewire pipewire-pulse wireplumber
``` 

---

# 🔁 Step 5 — Reboot system

```bash
reboot
``` 

---

# 🧪 Step 6 — First boot

After reboot you should see:

- SDDM login screen
- Plasma session option
- KDE desktop environment loads correctly

---

# 🧠 Notes

- KDE regenerates configuration on first login
- Previous configs are not restored automatically
- You can safely reinstall if needed
