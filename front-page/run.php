<?php

function checkLinuxServer()
{
    return strpos($_SERVER['SERVER_NAME'], 'dreamlandbyflavia') !== false;
}

function createWebPImage($input, $output)
{
    $command = checkLinuxServer() ? "/tmp/cwebp" : "start cwebp.exe";
    $command .= " -q 90 images/$input -o images/$output";
    system($command);
}

function getAllImagesFromCurrentFolder()
{
    $allFolderFiles = array_diff(scandir('images'), array('.', '..'));
    foreach ($allFolderFiles as $crtKey => $crtFile) {
        if (strpos($crtFile, 'blog_') === false
            && strpos($crtFile, 'shop_') === false
            && strpos($crtFile, 'background') === false) {
            unset($allFolderFiles[$crtKey]);
        }
    }
    return array_values($allFolderFiles);
}

function computeOutputImageFile($file)
{
    $pieces = explode('.', $file);
    return $pieces[0] . '.webp';
}

function deleteAllPreviousWebPImages()
{
    $allFolderFiles = array_diff(scandir('images'), array('.', '..'));
    foreach ($allFolderFiles as $crtFile) {
        if (strpos($crtFile, '.webp') !== false) {
            deleteFile($crtFile);
        }
    }
}

function deleteFile($file)
{
    $command = checkLinuxServer() ? "rm images/$file" : "del images\\$file";
    system($command);
}

deleteAllPreviousWebPImages();
echo "Removed latest .webp images.\n";

$allImageFiles = getAllImagesFromCurrentFolder();
print_r($allImageFiles);

echo "Created images:\n";
foreach ($allImageFiles as $crtImage) {
    $outputImage = computeOutputImageFile($crtImage);
    createWebPImage($crtImage, $outputImage);
}
