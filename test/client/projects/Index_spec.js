/* global describe,it */
import React from 'react';
import axios from 'axios';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Index from '../../../src/components/projects/Index';

const testData =[
  {
    name: 'Teaching/Education',
    country: 'Argentina',
    image: 'https://ivhq.imgix.net/images/gallery/volunteer-in-argentina-buenos-aires/volunteer-teacher-in-argentina-with-ivhq.jpg?w=1200&q=85',
    lat: -38.416096,
    lng: -63.616673,
    countryInfo: 'Like its topography, Argentina’s climate varies greatly. The climate ranges from subtropical in the north, to humid in the central regions, to sub-Antarctic in the south. Winter is the driest period of the year (June to August). The coldest months are June and July and the warmest month is January. Average annual temperatures in Buenos Aires range from 51°F to 83°F (11°C to 28°C). The official language is Spanish',
    description: 'The purpose of the Teaching/Education project is to assist in the implementation of an integrative educational project, aimed at addressing issues of poverty and illiteracy in low-income communities. In the shanty town areas of southern Buenos Aires, local schools promote social inclusion through education to families and by combining different social groups within the school. As part of this initiative, volunteers work alongside a local teacher to carry out English lessons to primary and secondary school-aged children. Typical activities on this project include assisting with pronunciation and providing additional guidance and support to the children in the class. Volunteers may also have the opportunity to assist with music and art lessons.'
  },
  {
    name: 'Marine Conservation',
    country: 'Australia',
    image: 'https://ivhq.imgix.net/images/gallery/volunteer-in-australia/ivhq-australia-marine-conservation-turtle.jpg?w=1200&q=85',
    lat: -25.274399,
    lng: 133.775131,
    countryInfo: 'Cairns is considered to have a tropical climate and is warm year round. The hot season lasts 4-5 months from November to March. During this time, the daily high is often around 86°F (30°C). The cooler season runs from June to August and the daily high is around 79°F (26°C). Being a monsoonal climate, most rainfalls occurs between January and March. The official language is English',
    description: 'Volunteers on the Marine Conservation project in Australia have the opportunity to join a variety of important conservation efforts focused on the protection of Great Barrier Reef ecosystem. When volunteering in Australia, you will work in collaboration with a number of oceanographic organizations to gather vital raw data and support the protection of the Great Barrier Reef through a range of initiatives, including: Reef Monitoring - This portion of the Marine Conservation project involves snorkeling within an assigned area to collect data on the species living in the Great Barrier Reef. You do not require any previous reef surveying experience to participate, as you will be trained in the methodology of in-water surveying during your program orientation. A full-length lycra suit will be supplied and volunteers are just required to bring their own snorkel and waterproof watch. Marine Debris Collection and Research - Marine debris represents a significant threat to the Great Barrier Reef ecosystem and is having a devastating impact on marine life. As a volunteer, you will be assisting with marine debris data collection and mapping. This data will then be categorized and shared with university and conservation groups to assist with their research objectives. Training is provided for all volunteers regarding the importance of this work and you will be shown how to undertake marine debris data collection using the equipment provided to you. Sea Turtle Rehabilitation (For volunteers staying for 2-4 weeks) - To support sea turtle conservation efforts, you will be trained to assist with the care of sick and injured sea turtles during the rehabilitation process. You will also have the opportunity to gain an in-depth understanding of each turtle’s specific case and rehabilitation requirements. Your tasks may include cleaning filters and tanks, preparing food and feeding turtles. Other activities may include assisting with the upkeep of the center’s facilities.'
  },
  {
    name: 'Eco-Agriculture Conservation',
    country: 'Costa Rica',
    image: 'https://ivhq.imgix.net/images/gallery/volunteer-in-costa-rica/ivhq-costa-rica-manuel-antonio-renovation-project.jpg?w=1200&q=85',
    lat: 9.748917,
    lng: -83.753426,
    countryInfo: 'Costa Rica is unequivocally a tropical country, situated between 8° and 11° north latitude, fairly close to the equator. Although you get much cooler temperatures in the mountains above 2000 meters, the average annual temperature for most of the country lies between 71°F (21.7°C) and 81°F (27°C). The coolest months are from November through to January, and the warmest months are from March through to May. San Jose stands at approximately 1170 meters altitude and has a mean annual temperature of 69°F (20.6°C). The official language is Spanish',
    description: 'As a volunteer on our Eco-Agriculture Conservation project, you will be based in the Central Highlands of Costa Rica, approximately 4 hours from San Jose.If you’re passionate about conservation, enjoy hands-on tasks and seeing the physical results of your hard work, this project will be perfect for you. This is a unique eco-volunteering opportunity where the focus is not only on agriculture but also supporting the local community. Coffee lovers will find this project both interesting and rewarding. After seeing all the hard work that goes into coffee production, you’ll never look at a cup of coffee in the same way! You will be working alongside a local family in rural Costa Rica to support their coffee production. Your tasks on the Eco-Agriculture Conservation project will vary based on the time of year you take part, so it’s important to have enthusiasm for helping out where there is the most need. You may be involved in the harvesting, roasting and packaging of the coffee beans, composting, replanting and clearing the grounds to plant the next harvest.'
  },
  {
    name: 'Surf, Skate & Swim',
    country: 'South Africa',
    image: 'https://ivhq.imgix.net/images/gallery/volunteer-in-south-africa-table-mountain/ivhq-surf-volunteers-south-africa.jpg?w=1200&q=85',
    lat: -30.559483,
    lng: 22.937506,
    countryInfo: ' The subtropical location, moderated by the Atlantic and Indian Oceans on three sides of the country and the altitude of the central plateau, are responsible for the warm temperatures typical of South Africa. Across much of the country, summer (December to February) is characterized by hot, sunny weather with temperatures averaging around 25°C (77°F). Winter (May to September) is cooler and drier with evening temperatures averaging around 10 °C (50°F). In Cape Town, sporadic showers and chilly winds are common during the winter months, but with daytime temperatures can average around 15°C (59°F). Official languages are Afrikaans, English, Zulu, Xhosa, Swati, and Tswana.',
    description: 'The Surf, Swim and Skate project is run as an after-school activity for youth from one of the local schools we work with and caters to students from low-income communities, and operates Tuesday through Thursday afternoon. The children range in age from 10 to 16 years and the main aim of the project is to keep the children occupied and off the streets after school while providing them with confidence building activities. For many of the children this is the highlight of their day and the project is an incentive for them to do well in school as only those who attend school every day, behave in class and study diligently will be able to attend the project.As a volunteer on the Surf, Swim and Skate project you will help teach valuable life lessons and teamwork through adventure activities including skateboarding, swimming and surfing. You can expect to teach swimming to any children who cannot yet swim, assist with water safety and teaching surfing to children who are competent swimmers as well as teaching children how to skateboard. Volunteers who cannot yet surf will be provided a minimum of 1 lesson per week by our local instructor. As the Surf, Swim and Skate project is run in the afternoons you can expect to spend mornings assisting in the Kindergarten project or taking part in your designated surf lesson. Extra surf lessons can also be arranged through our local team at an additional cost.'
  }
];

sinon.stub(axios, 'get')
  .returns(Promise.resolve({ data: testData }));

describe('Bag Index', () => {
  it('should show the correct number Projects', done => {
    const component = shallow(<Index />);
    component.setState({ filteredProjects: testData });
    expect(component.state()).to.have.property('filteredProjects');
    expect(component.find('ProjectBox').length).to.eq(testData.length);
    done();
  });

  it('should have the correct project in each ProjectBox', done => {
    const component = shallow(<Index />);
    component.setState({ filteredProjects: testData });
    component.find('ProjectBox').forEach((box, i) => {
      expect(box.props().project.name).to.eq(testData[i].name);
    });
    done();
  });
});
