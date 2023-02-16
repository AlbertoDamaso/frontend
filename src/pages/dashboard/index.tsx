import { useState } from "react";
import Head from "next/head";
import { setupAPIClient } from "../../services/api";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";

type OrderProps = {
    id: string;
    table: string | number;
    status: boolean;
    draft: boolean;
    name: string | null;
}

interface HomeProps{
    order: OrderProps[];
}

export default function Dashboard({ order }: HomeProps){ 
    
}