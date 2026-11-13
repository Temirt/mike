<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Ethio-German Consulting Architects & Engineers PLC | Engineering Tomorrow. Designing Better Living.</title>
        <meta name="description" content="Category One Architectural & Structural Engineering Consulting Firm in Addis Ababa, Ethiopia. Delivering comprehensive architecture, structural engineering, electromechanical design, and project supervision.">
        
        <!-- Favicon -->
        <link rel="icon" type="image/png" href="/images/logo-transparent.png">

        <!-- Google Fonts: Manrope (Headings) & Inter (Body) -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Manrope:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

        <!-- Scripts & Styles -->
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    </head>
    <body class="bg-white text-[#202A35] antialiased selection:bg-[#102B4E] selection:text-white">
        <div id="root"></div>
    </body>
</html>
