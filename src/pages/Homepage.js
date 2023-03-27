import UserSection from "../components/userSection";
import CarouselItems from "../components/carouselitems";

//renders the initial homepage:, somethings up with the CSS styling and I have no idea what it is...
//for some reason, everythingn is still in block and the other attributes, including the cascade no longer work which is nice.
const HomePage = () => {
  return (
    <div className="row">
      <div className="col-3 pt-3 ps-4 bg-purple">
        <UserSection />
      </div>
      <div class="col-9">
        <CarouselItems title="Recommended" id="ExamplesCarousel1" />
        <CarouselItems title="Wishlist" id="ExamplesCarousel2" />
      </div>
    </div>
  );
};
export default HomePage;
