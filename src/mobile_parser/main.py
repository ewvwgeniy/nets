import requests
from bs4 import BeautifulSoup
# import csv
import json
import math

FILE = 'phones'
URL = 'https://ek.ua/list/122/'
HOST = 'https://ek.ua/'
HEADERS = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
}


def get_html(url):
    r = requests.get(url, headers=HEADERS)
    return r


def get_content(html):
    soup = BeautifulSoup(html, 'lxml')
    items = soup.select('div.model-short-div.list-item--goods')
    phones = []
    id = 0
    for item in items:
        try:
            name = item.find('td', class_='model-short-info').a.find('span', class_='u').text
        except:
            name = 'None'

        try:
            product_link = item.find('td', class_='model-short-info').a.get('href')
        except:
            product_link = ''

        try:
            memory = item.find('td', class_='model-short-info').find('div', class_='m-s-f2 no-mobile').text.split('Память:')[1].split('ГБ')[0].strip()
        except:
            memory = ''

        try:
            img = item.find('div', class_='list-img h').find('img').get('src')
        except:
            img = 'None'

        try:
            price_from = item.find('div', class_='model-price-range').a.text.split('г')[0].split('до')[0].replace('\u00A0', '').strip()
        except:
            price_from = ''

        try:
            price_to = item.find('div', class_='model-price-range').a.text.split('г')[0].split('до')[1].replace('\u00A0', '').strip()
        except:
            price_to = ''

        if price_from == '':
            item_price = str(price_to)
        elif price_to == '':
            item_price = str(price_from)
        else:
            item_price = str(math.ceil((int(price_from) + int(price_to))/2)) + ' ₴'

        phones.append(
            {
                'id': id,
                'item_name': name,
                'item_img_url': img,
                'item_price': item_price,
                'views_count': 0
            }
        )
        id += 1

    return phones


def page_kol():
    html = get_html(URL)
    if html.status_code == requests.codes.ok:
        soup = BeautifulSoup(html.text, 'lxml')
        pages = soup.find('div', class_='ib page-num').find('a', id='pager_dots').next_sibling.next_sibling.text
        return int(pages)


def parser():
    PAGES = page_kol()
    phones = []
    for page in range(0, PAGES - 1):
        print('Parsing page: ' + str(page + 1))
        html = get_html(URL + str(page) + '/')
        if html.status_code == requests.codes.ok:
            phones.extend(get_content(html.text))
            save_as_json(phones)
        else:
            print('status code error')
    print('ALL PAGES ARE PARSED')


"""
def save_as_csv(phones):
    file_name = FILE + '.csv'
    with open(file_name, 'w') as f:
        writer = csv.writer(f, delimiter=';')
        writer.writerow(['Название мобильного телефона', 'Ссылка на телефон', 'Объём памяти', 'Ссылка на изображение',
                         'Минимальная цена', 'Максимальная цена'])
        for phone in phones:
            writer.writerow([phone['name'], phone['product_link'], phone['memory'], phone['img'], phone['price_from'], phone['price_to']])
 """

def save_as_json(phones):
    file_name = FILE + '.json'
    json_object = json.dumps(phones, indent = 4)
    with open(file_name, 'w') as write_file:
        write_file.write(json_object)

parser()