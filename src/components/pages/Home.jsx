import Banner from "../organisms/Banner"
import ContentPlans from "../organisms/ContentPlans"
import CreateApp from "../organisms/CreateApp"
import WhyShinka from "../organisms/WhyShinka"


const Home = () => {
  return (
    <section>
      <Banner/>
      <CreateApp/>
      <WhyShinka/>
      <ContentPlans title="Forma parte de CodexFlow"/>
    </section>
  )
}

export default Home
