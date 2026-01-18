import requests
import json
import base64
import os

PRIVATE_KEY = 'private_+6lM9L+kOtALY9l2p0gIByQ7ayk='
URL_ENDPOINT = 'https://ik.imagekit.io/dzmabcda0'

def list_all_files():
    url = "https://api.imagekit.io/v1/files"
    auth = base64.b64encode(f"{PRIVATE_KEY}:".encode()).decode()
    headers = {
        'Authorization': f"Basic {auth}"
    }
    
    all_files = []
    skip = 0
    limit = 100
    
    print("Fetching file list...")
    while True:
        params = {'skip': skip, 'limit': limit}
        response = requests.get(url, headers=headers, params=params)
        
        if response.status_code != 200:
            print(f"Error: {response.status_code} - {response.text}")
            break
            
        data = response.json()
        if not data:
            break
            
        all_files.extend(data)
        print(f"Fetched {len(data)} files...")
        
        if len(data) < limit:
            break
            
        skip += limit

    # Filter for images
    images = [f for f in all_files if f['fileType'] == 'image']
    
    with open('image_inventory.json', 'w') as f:
        json.dump(images, f, indent=2)
        
    print(f"Total images found: {len(images)}")
    
    # Print a summary for the agent
    for img in images[:20]:
        print(f"{img['name']} - {img['url']}")

if __name__ == "__main__":
    list_all_files()
