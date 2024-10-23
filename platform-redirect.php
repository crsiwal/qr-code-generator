<?php
// Get the URLs from the GET request parameters
$androidUrl = isset($_GET['p']) ? $_GET['p'] : null;
$iosUrl = isset($_GET['a']) ? $_GET['a'] : null;
$defaultUrl = isset($_GET['u']) ? $_GET['u'] : null;

// Detect the User-Agent
$userAgent = $_SERVER['HTTP_USER_AGENT'];

// Check if the User-Agent string contains "Android" or "iPhone/iPad" and redirect accordingly
if (stripos($userAgent, "Android") !== false && $androidUrl) {
    // Redirect to Android-specific URL from 'p' parameter
    header("Location: $androidUrl");
    exit;
} elseif ((stripos($userAgent, "iPhone") !== false || stripos($userAgent, "iPad") !== false) && $iosUrl) {
    // Redirect to iOS-specific URL from 'a' parameter
    header("Location: $iosUrl");
    exit;
} else {
    // Check if the default URL is set
    if (!$defaultUrl) {
        // Fallback if the default URL is not provided
        echo "Default URL is required.";
        exit;
    }

    // Redirect to default URL if Android or iOS URLs are not present
    header("Location: $defaultUrl");
    exit;
}
