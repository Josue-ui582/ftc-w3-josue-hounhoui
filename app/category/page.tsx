import CategoryHeader from "@/components/layout/category/category-header/categoryHeader";
import CategoryMain from "@/components/layout/category/category-main/categoryMain";
import Footer from "@/components/layout/footer/footer";
import Navbar from "@/components/layout/navbar/navbar";
import React from "react";

export default function Category () {
    return(
        <>
            <Navbar />
            <CategoryHeader />
            <CategoryMain />
            <Footer />
        </>
    )
}