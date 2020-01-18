Laravel Nova tool to manage app settings
========================================

[![Latest Version on Packagist](https://img.shields.io/packagist/v/bakerkretzmar/nova-settings-tool.svg?style=flat)](https://packagist.org/packages/bakerkretzmar/nova-settings-tool)
[![Total Downloads](https://img.shields.io/packagist/dt/bakerkretzmar/nova-settings-tool.svg?style=flat)](https://packagist.org/packages/bakerkretzmar/nova-settings-tool)
[![Build](https://github.com/bakerkretzmar/nova-settings-tool/workflows/CI/badge.svg)](https://github.com/bakerkretzmar/nova-settings-tool/actions)
[![StyleCI](https://github.styleci.io/repos/165178010/shield?branch=master&style=flat)](https://github.styleci.io/repos/165178010)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](https://opensource.org/licenses/MIT)

Store and edit simple app-wide settings right in Nova. Settings are stored as JSON using [`spatie/valuestore`](https://github.com/spatie/valuestore), making them really easy to [pull in and use everywhere else in your app](https://laravel-news.com/global-application-settings).

![Settings Tool screenshot](settings-tool.png)

## Installation

Install the package via Composer in any Laravel app using [Nova](https://nova.laravel.com):

```shell
composer require andreasgj/nova-settings-tool
```

Publish the default configuration file to `config/nova-settings-tool.php`:

```shell
php artisan vendor:publish --tag="nova-settings-tool"
```

Register the tool with Nova in the `tools` method of your `NovaServiceProvider`:

```php
// in app/Providers/NovaServiceProvider.php

use Bakerkretzmar\NovaSettingsTool\SettingsTool;

    // ...

    public function tools()
    {
        return [
            new SettingsTool,
        ];
    }
```

## Usage

Settings are declared in a `nova-settings-tool.php` config file. This file specifies where settings are stored, what the tool’s title is in Nova’s sidebar, the layout of the settings page, and metadata about the settings themselves.

A [default config file with some helpful examples](config/nova-settings-tool.php) is included as a starting point:

Each item in the `panels` array is a panel which contains Nova’s fields. Panels can also shown as a sidebar instead, so if you have a lot of settings, then you don't need to scroll through it all.

![Settings Tool in accordion mode screenshot](settings-tool-accordion.png)

The settings’ actual values are stored as JSON at the location specified in the config file—`storage/app/settings.json` by default.

You can use all the Nova fields which isn't a relationship field.

All strings in this package, and any you pass to it, can easily be translated using [Laravel’s built-in localization features](https://laravel.com/docs/localization#using-translation-strings-as-keys).

## Roadmap

The following features are planned or in development:
- ?

---

[CHANGELOG](CHANGELOG.md) • [CONTRIBUTING](CONTRIBUTING.md) • [LICENSE](LICENSE.md)
