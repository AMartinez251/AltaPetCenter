import React from 'react';
import { motion } from 'framer-motion';
import BoneDivider from './BoneDivider';
import Divider from './Divider';
import './Services.css';
import ServiceImg from '../dogs/services.jpg';

const Services = () => {

  return (
    <motion.section
      className="about-section">
      <motion.section
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0 , opacity: 1}}
      transition={{ duration: 0.4, ease: "easeInOut" }}>

 <div className="spacer"></div>
 <img className="banner-img" src={ServiceImg} alt="" />
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
<motion.p className="ds last">
Our full time receptionists greet each client upon entering the salon, and our entire staff strives to make the grooming experience one that you and your pet will find pleasurable. The theme of this business has always been to set the standard for professionalism and service to our clients and our community.
</motion.p>

  </motion.section>
</motion.section>
  );
};

export default Services;