import { useState } from "react";
import Head from "next/head";

import { setupAPIClient } from "../../services/api";
import { Header } from "@/components/Header";

import styles from "./styles.module.scss";
import { toast } from "react-toastify";

type ProdProps = {
    // parms: {
    //     X-Amz-Algorithm: string;
    //     X-Amz-Content-Sha256: string;
    //     X-Amz-Credential: string;
    //     X-Amz-Date: string;
    //     X-Amz-Expires: string;
    //     X-Amz-Signature: string;
    //     X-Amz-SignedHeaders: string;
    //     response-content-disposition: string;
    //     x-id: string;
    // }
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

        const response = await apiClient.get('/',{
            params:{

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
                            <span>Mesa {item.name}</span>
                        </section>
                    ))}
                </article>
            </main>                    
            </div>
        </>
    )
}