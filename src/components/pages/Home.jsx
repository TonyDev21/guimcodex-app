import Academy from "../organisms/Academy"
import Banner from "../organisms/Banner"
import ContentPlans from "../organisms/ContentPlans"
import ScrollCourses from "../organisms/ScrollCourses"
import WhyGuimCodex from "../organisms/WhyGuimCodex"

const Home = () => {
    return (
        <>
            <section >
                <div className="bg-gradient-to-b from-secundary-color to-primary-color">
                    <Banner/>
                    <Academy/>
                </div>
                <WhyGuimCodex/>
                <ScrollCourses/>
                <ContentPlans title="Forma parte de GuimCodeX"/>
            </section>  
        </>
    )
}

export default Home