import ProduktListe from "../../komponenten/ProduktListe";
import Slider from "../../komponenten/Slider";
import '../styles/Home.module.css'
import mongodb from "../../utils/mongodb";
import Produkt from "../../models/Produkt";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home({produkte}) {
  return (
    <motion.div
    initial= {{opacity: 0, x: -50}} 
    animate= {{opacity: 1, x: 0}}
    transition={{type: "spring", stiffness: 200}}
    >
      <Head>
        {/* Preloading-Tag entfernt */}
      </Head>
      <Slider />
      <ProduktListe produkte={produkte} />
    </motion.div>
  );
}

export async function getServerSideProps() {
  await mongodb.dbConnect();
  const produkte = await Produkt.find({}).lean();
  return {
    props: {
      produkte: JSON.parse(JSON.stringify(produkte))
    }
  }
}

