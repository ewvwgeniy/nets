# What is Phones.net?

It's a service that takes phones from [https://ek.ua/](https://ek.ua/) by parsing the html of this site.
It takes general information about the phones and reproduce them in the file phones.json (after the script works) and on the site which you can open by the instructions below.
On the site you can add phones to the wishlist and use a search. Good luck and buy only good phones!

# Getting Started with Phones.net

## 1)
Download and install [node.js](https://nodejs.org/en/) \
Check installation with commands in console
### `node -v`
### `npm -v`

## 2)
Go to the project directory

## 3)
Run dependencies installation with the script
### `npm install`

## 4)
[Install Python and pip](https://phoenixnap.com/kb/install-pip-windows)

## 5)
Go to the directory
### `./src/mobile_parser`

## 6)
Run the scripts
### `pip install lxml`
### `pip install requests`
### `pip install beautifulsoup4`

## 7)
Run the script
### `python ./main.py`

## 8)
When all pages will be parsed and the script ends, go back to the previous directory (project directory)

## 9)
Run the script
### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.