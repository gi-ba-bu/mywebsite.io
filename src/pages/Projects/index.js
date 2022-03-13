import React from 'react';

import { Switch, Route} from 'react-router-dom';
import { Card } from '../../component'
import './style.css'

const Projects = () => {
  // const history = useHistory();

  // const loadFeaturedStory = id => history.push(`/news/${id}`)
  
  // const params = useParams();

  // // function NewsPost() {
  // //   let { id } = useParams();
  // //   console.log(id);
  // //   return <h1>Now showing News {id}</h1>;
  // // }
 
  return(
    <div >
      {/* <h1>Our favourite Songs</h1> */}

      {/* <aside>
        <Greeting />

        <ReaderCount />
      
        <img src="https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="newspapers"/>

      </aside> */}

 
        <Switch>
            <Route exact path={"/projects"}>
            <div>
            <div className='spacing-a-bit-top' ></div>
            <h3 >Work in progress. Come back soon.</h3>
            <div className='cards-container'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
            <div className='spacing-a-bit-bottom' ></div>
            </div>
            </Route>
            
            {/* Dynamic route params */}
            <Route path={"/projects/:id"}>
            <>Hello news id</>
            {/* <Songs /> */}
            {/* <NewsPost /> */}

            </Route>
        </Switch>


    </div>
  );

};

export default Projects;
