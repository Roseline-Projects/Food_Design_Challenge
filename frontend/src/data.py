import csv
import json

csv_file = 'frontend/src/constants/SNAP Retailer Location data Final.csv'
js_file = 'frontend/src/constants/stores.js'

with open(csv_file, newline='', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    reader.fieldnames = [field.strip() for field in reader.fieldnames]
    data = []

    for row in reader:
        entry = {
            "recordId": row["Record ID"],
            "storeName": row["Store Name"],
            "storeStreetAddress": row["Store Street Address"],
            "additonalAddress": row["Additonal Address"],
            "city": row["City"],
            "state": row["State"],
            "zipCode": row["Zip Code"],
            "zip4": row["Zip4"],
            "county": row["County"],
            "storeType": row["Store Type"],
            "latitude": row["Latitude"],
            "longitude": row["Longitude"],
            "incentiveProgram": row["Incentive Program"],
            "granteeName": row["Grantee Name"],
            "x": row["x"],
            "y": row["y"]
        }
        data.append(entry)

with open(js_file, 'w', encoding='utf-8') as f:
    f.write("const snapStoreData = ")
    json.dump(data, f, indent=2)
    f.write(";\nexport default snapStoreData;")
