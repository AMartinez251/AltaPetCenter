import { motion } from "framer-motion";
import "./Home.css";
import Divider from "./Divider";
import BoneDivider from "./BoneDivider";
import Cara from "./Cara"
import Hours from "./Hours";

function Home() {
  return (
    <motion.section
      className="hero-section"
    >
        <motion.section
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0 , opacity: 1}}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      >

        <div className="hero-cont">
        <div className="spacer"></div>
        <div className="call-to-cont"> 
            <div className="call-to-call">
                <motion.h1 className="welcome" >
                  Welcome to Alta Pet Center
                </motion.h1>
                <motion.h1 className="call-now" >
                  Call (909) 949-0199 and schedule your appointment today!
                </motion.h1>
            </div>
        </div>

        <Cara className="cara" width="100%"/>
        <div className="call-to-cont"> 
            <div className="call-to-call">
                <motion.p className="slogan" >
                Alta Pet Center is the leader of the pack when it comes to the absolute best care for your pet!
                </motion.p>
            </div>
        </div>
      <Divider id="#about"title={"About us"}/>

      <motion.p className="ds last" >
      Alta Grooming is a full service salon established in May 1990. Our commitment is to provide quality health and beauty services for pets of all sizes in a caring, stress-free environment. Our highly trained, talented pet stylists have an average of 20 years experience in the pet care industry.
We offer a wide range of grooming services from whimsical clips designed to fit your pets personality to specialty show grooming and terrier hand stripping. All services are provided in a loving and professional manner so that your pet can enjoy his "spa day" as much as you appreciate his fresh and well groomed appearance.
      </motion.p>

      <Divider id="#services"title={"Services"}/>

    <motion.p className="ds">
    We have an ongoing concern for the humane treatment of all pets. Your pet will be groomed and bathed in a clean, sanitary and pleasant atmosphere.
A natural, PH balanced Shampoo is selected that is specifically formulated for pets skin and hair. It is safe and gentle for eyes, ears, and sensitive body parts.
Your pet is brushed, bathed and dried with the their safety and comfort being our main concern. The following are included in the bathing process
Nails are trimmed and filed as needed with special attention given to dew claws.
Ears are checked and gently cleaned. Cotton is used in ears to protect from water.
Anal glands are checked and expressed if requested
</motion.p>
<BoneDivider/>
<motion.p className="ds last">
Teeth brushing, Blueberry facials, Conditioning treatments, Flea treatment, and application of veterinary prescribed shampoos are all available at a small additional charge.
Veterinarian prescribed shampoos should be accompanied by written instructions to insure proper application.
Each pet will receive a bandanna or bow and a spritz of cologne. Please advise us if you do not wish to receive these free extras
    </motion.p>
    <Divider id="drying" title={"Drying"}/>
    <motion.p className="ds">
    Dried with strict safety standards and customized for your pet's comfort. Thick double coats are dried with HurryCanine dryers to remove undercoat and reduce shedding. Curly and soft coats are hand fluffed dried. We do not use heated cage dryers.
There are 4 basic drying techniques that professionals use on pets. The coat type will often be the deciding factor when choosing the technique that will produce the best results.
    </motion.p>
    <BoneDivider/>
    <motion.p className="ds">
        Aged or disabled pets are given extra care and extended time, according to their needs. Stress is reduced when pets are allowed to rest during the grooming process. Puppies and kittens are groomed at their pace. The first time grooming experience sets the stage for future grooming sessions.
An additional charge may apply to special conditions requiring unusual time and effort. These include but are not limited to pets with behavior problems and matted coats. You will be informed in advance if an additional charge is warranted.
    </motion.p>
    <BoneDivider/>
    <motion.p className="ds last">
Your pet is trimmed by a trained professional in the way you request. We will be happy to suggest a suitable style for your pet if you prefer. We welcome photos.
We offer hand stripping of wire coated breeds by special appointment.
Show grooming is available for most AKC registered breeds. Please specify show grooming when calling for appointment. Hand stripping and show grooming require extra time.
    </motion.p>
    <Divider id="appt" title={"Standing Appointment"}/>
    <motion.p className="ds last">
This program insures that you will have the appointment you need when you need it. The interval is selected by you to maintain the appearance and comfort of you pet. To enroll in the program, simply call the receptionist or ask to join at your next visit. You will receive a reminder call before your appointment. At that time you may confirm, cancel or reschedule a more convenient time.
    </motion.p>
    <Divider id="pricing" title={"Pricing"}/>
    <motion.p className="ds">
Grooming services are unique and individualized for each pet. As such, there is no one price fits all.
Price quotes given over the phone will be a range or estimate based on the information provided to us.
A more accurate price can be given when the pet is presented to us at appointment time. Our prices remain competitive.
    </motion.p>
    <BoneDivider/>
    <motion.p className="ds">
Our full time receptionists greet each client upon entering the salon, and our entire staff strives to make the grooming experience one that you and your pet will find pleasurable. The theme of this business has always been to set the standard for professionalism and service to our clients and our community.
    </motion.p>

    </div>

    <div className="last"></div>
    <Hours/>
    <div className="last"></div>
      </motion.section>
    </motion.section>
  );
}

export default Home; 