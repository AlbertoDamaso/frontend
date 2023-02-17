import { useState } from "react";
import Head from "next/head";

import { setupAPIClient } from "../../services/api";
import { Header } from "@/components/Header";

import styles from "./styles.module.scss";
import { toast } from "react-toastify";

type ProdProps = {

        id: number;
        name: string;
        price: number;
        score: number;
        image: string;
}

interface HomeProps{
    prod: ProdProps[];
}

export default function Dashboard({ prod }: HomeProps){ 
    const [prodList, setProdList] = useState(prod  || []);

    async function handleProd() {

        const apiClient = setupAPIClient(undefined);

        const response = await apiClient.get('/10792f77-3dd6-4ccd-bf4f-99967a8b1b87/products.json?',{
            params:{
                'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
                'X-Amz-Content-Sha256': 'UNSIGNED-PAYLOAD',
                'X-Amz-Credential': 'AKIAT73L2G45EIPT3X45%2F20230216%2Fus-west-2%2Fs3%2Faws4_request',
                'X-Amz-Date': '20230216T215800Z',
                'X-Amz-Expires': 86400,
                'X-Amz-Signature': 'bc670c703d7f31634cfb9548e0a514262513ae045428f7303d94170f4d24a11d',
                'X-Amz-SignedHeaders': 'host',
                'response-content-disposition': 'filename%3D%22products.json%22',
                'x-id': 'GetObject',
            }
        });
        setProdList(response.data);
    }

    return(
        <>
            <Head>
                <title> GameStore - Painel </title>
            </Head>
            <div>
                <Header/>

            <main className={styles.container}>
                <article className={styles.listOrders}>

                    {prodList.length === 0 && (
                        <span className={styles.emptyList}>
                            Nenhum produto foi encontrado...
                        </span>
                    )}

                    {prodList.map( item => (
                        <section key={item.id} className={styles.orderItem}>
                            <div className={styles.tag}></div>
                            <span>Produto {item.name}</span>
                            <span>Produto {item.price}</span>
                            <span>Produto {item.score}</span>
                            <span>Produto {item.image}</span>
                        </section>
                    ))}
                </article>
            </main>                    
            </div>
        </>
    )
}