import { ProductInfo } from '../types';
import testInfo from '../staticProductInfo.json';

const arrayKey = 'suggestions';

const asProductInfoArray = (unknownData: any): ProductInfo[] => {
    let list: ProductInfo[] = [];
    let data = typeof unknownData !== 'object' ? JSON.parse(unknownData) : unknownData;

    data[arrayKey].map(
        (product: any) => list.push({
            id: product.id || -1,
            productId: product.prod_id || -1,
            title: product.title || "unkown product",
            price: product.price || -1,
            description: product.description || "undescribed product",
            link: product.link || "https://www.sallinggroup.com",
            image: product.img || "https://http.cat/404"
        })
    )
    return list;
}

const getStaticTestInfo = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(testInfo);
        }, 1000);
    });
}

export const queryProducts = (query: string): Promise<ProductInfo[]> => {
    /*fetch(
        "https://api.sallinggroup.com/v1-beta/product-suggestions/relevant-products?" + new URLSearchParams({ query: query }),
        {
            headers: {
                Authorization: "Bearer b1af39be-fc0a-433b-9f12-d9369d360bfb"
            },
            method: "GET",
            mode: "no-cors"
        }
    )*/
    return getStaticTestInfo()
    .catch(error => {
        console.log(error);
        return []
    })
    .then(
        data => asProductInfoArray(data)
    );
}

export const getProducts = (): Promise<ProductInfo[]> => {
    return queryProducts("m%C3%A6lk");
}


