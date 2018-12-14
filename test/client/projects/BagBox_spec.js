/* global describe,it */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ProjectBox from '../../../src/components/projects/ProjectBox';

const testData =
  {
    name: 'Eco-Agriculture Conservation',
    country: 'Costa Rica',
    image: 'https://ivhq.imgix.net/images/gallery/volunteer-in-costa-rica/ivhq-costa-rica-manuel-antonio-renovation-project.jpg?w=1200&q=85',
    lat: 9.748917,
    lng: -83.753426,
    countryInfo: 'Costa Rica is unequivocally a tropical country, situated between 8° and 11° north latitude, fairly close to the equator. Although you get much cooler temperatures in the mountains above 2000 meters, the average annual temperature for most of the country lies between 71°F (21.7°C) and 81°F (27°C). The coolest months are from November through to January, and the warmest months are from March through to May. San Jose stands at approximately 1170 meters altitude and has a mean annual temperature of 69°F (20.6°C). The official language is Spanish',
    description: 'As a volunteer on our Eco-Agriculture Conservation project, you will be based in the Central Highlands of Costa Rica, approximately 4 hours from San Jose.If you’re passionate about conservation, enjoy hands-on tasks and seeing the physical results of your hard work, this project will be perfect for you. This is a unique eco-volunteering opportunity where the focus is not only on agriculture but also supporting the local community. Coffee lovers will find this project both interesting and rewarding. After seeing all the hard work that goes into coffee production, you’ll never look at a cup of coffee in the same way! You will be working alongside a local family in rural Costa Rica to support their coffee production. Your tasks on the Eco-Agriculture Conservation project will vary based on the time of year you take part, so it’s important to have enthusiasm for helping out where there is the most need. You may be involved in the harvesting, roasting and packaging of the coffee beans, composting, replanting and clearing the grounds to plant the next harvest.'
  };

describe('ProjectBox', () => {
  it('should show the correct project', done => {
    const component = shallow(<ProjectBox project={testData}/>);
    expect(component.find('image').length).to.eq(1);
    expect(component.find('image').props().src).to.eq(testData.image);
    done();
  });
});
