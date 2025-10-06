# Product Images

This folder contains PNG images for each product in the Kassatly catalog.

## Required PNG Files

Please add the following PNG files to this directory:

### Non-Alcoholic Products

- `mezza.png` - Mezza low-calorie malt beverage
- `freez.png` - Freez flavored carbonated drink
- `fruitastic.png` - Fruitastic 100% juices
- `syrups.png` - Syrups (Jallab, Rose, Tamarind, Almond)
- `jams.png` - Jams and fruit spreads

### Alcoholic Products

- `beirut-beer.png` - Beirut Beer Pilsner
- `buzz.png` - Buzz vodka-mix beverage
- `chateau-ka.png` - Chateau Ka wine
- `liqueurs.png` - Liqueurs collection

## Image Specifications

- **Format**: PNG with transparent background (recommended)
- **Size**: 48x48 pixels minimum (will be scaled responsively)
- **Aspect Ratio**: Square (1:1)
- **Background**: Transparent or white (will be displayed on colored circular backgrounds)

## Fallback Behavior

If a PNG image is missing or fails to load, the system will automatically fall back to the emoji icon that was previously used for that product.

## Usage

The images are automatically loaded by the ProductCard component. No additional configuration is needed once the PNG files are placed in this directory.
