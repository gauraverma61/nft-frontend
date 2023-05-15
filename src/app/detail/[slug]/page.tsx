import Detail from "@/components/Detail"


const DetailPage = async({ params }: { params: { slug: string } }) => {
    const slugs = params.slug

    return <Detail/>
}

export default DetailPage;