---
title: 'PHP 8.1 released' 
description: 'meta description of the page' 
tags: [php, 2, 3]
---

<center>
PHP 8.1 is a major update of the PHP language. It contains many new features, including enums, readonly properties,
first-class callable syntax, fibers, intersection types, performance improvements and more.

<table>
<tr>
<td>

```php

class Status
{
    const DRAFT = 'draft';
    const PUBLISHED = 'published';
    const ARCHIVED = 'archived';
}

function acceptStatus(string $status) {...}
```
</td>
<td>

```php
enum Status
{
    case Draft;
    case Published;
    case Archived;
}

function acceptStatus(Status $status) {...}
```
</td>
</tr>
</table>
<p>Use enum instead of a set of constants and get validation out of the box.</p>

</center>
<style>
    table {
        width: 100%;
    }
</style>
