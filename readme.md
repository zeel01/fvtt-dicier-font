# Dicier Font
This Foundry module is intended to be used as a dependency by other modules, it does very little on its own.

## How To Use This Module
This module includes the Dicier font, and a stylesheet to make it available for use within Foundry VTT. The stylesheet adds fairly basic support for most of the features of this font, for more advanced needs you will need to reference the Dicier documentation included in the `/fonts` folder, and write custom CSS.

### Basic Usage
Dicier uses ligatures to convert normal readable text into symbols. Unlike an icon font, this makes the text remain accessible. The string `15_ON_D20` remains meaningful even if not rendered in the Dicier font - such as when spoken aloud by a screen reader.

To apply the Dicier font to text, use the `.dicier` class:
```html
<span class="dicier">8_ON_D12</span>
```

The font has multiple styles, accessed through `.round` (default), `.block`, `.flat`, and `.pixel`. The pixel style lacks many features supported in the other styles.

You can also use the font in three different weights: `.light` (default), `.heavy`, and `.dark`.

### Dice Shapes
By default, numbers are converted to pipped dice. To use different dice shapes, you can use codes like `4_ON_D8`. You can also change the style of all numbers so that they appear in dice shapes on their own. This module offers a class for each style: `.d4`, `.d6` (non-pipped), `.d8`, `.d10`, `.d12`, and `.d20`.

### Style and Character Variants
There are a number of provided classes (see the `dicier.css` file for the full list) for styles and character variants. See the Dicer documentation for more about these.

## Known Issues
- You can not mix and match various font features using the provided classes. This is a limitation of CSS and property redefinition. To use multiple `font-feature-settings` you will need to create custom CSS which declars are the features you want in one declaration (see the `.poker-dice` class as an example).

## License
This Foundry VTT module was created by Josh Olsen (zeel), the code within is licensed under the MIT open source license.

The Dicier Font was created by Speak The Sky. You can download the font and donate to Speak The Sky at: https://speakthesky.itch.io/typeface-dicier. The font is licensed under the Creative Commons Attribution 4.0 International license, or CC BY 4.0. You can find the simple and full license terms at the following url: https://creativecommons.org/licenses/by/4.0/


## Examples
```html
<span class="dicier">8_ON_D20</i>
<span class="dicier">6</i>
<span class="dicier d4">2</i>
<span class="dicier d6">3</i>
<span class="dicier d8">4</i>
<span class="dicier d10">5</i>
<span class="dicier d12">5</i>
<span class="dicier d20">15</i>
<span class="dicier d12">ANY</i>
```