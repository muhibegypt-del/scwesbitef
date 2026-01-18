import json
import requests
import os

def download_proxies():
    with open('image_inventory.json', 'r') as f:
        images = json.load(f)
    
    os.makedirs('temp_images', exist_ok=True)
    
    print(f"Downloading proxies for {len(images)} images...")
    
    for i, img in enumerate(images):
        # Use ImageKit transformation for small proxy
        url = f"{img['url']}?tr=w-300"
        filename = os.path.join('temp_images', img['name'])
        
        try:
            response = requests.get(url)
            if response.status_code == 200:
                with open(filename, 'wb') as f:
                    f.write(response.content)
                print(f"[{i+1}/{len(images)}] Downloaded {img['name']}")
            else:
                print(f"Failed to download {img['name']}")
        except Exception as e:
            print(f"Error downloading {img['name']}: {e}")

if __name__ == "__main__":
    download_proxies()
