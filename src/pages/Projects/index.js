import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Switch, Route} from 'react-router-dom';
import { Card103, Card102, Card101, Card100, Card99, Card98, Card97, Card96, Card95 } from '../../component'
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
    <Scrollbars style={{ width: "100vw", height: "100vh" }}
// This will activate auto hide
autoHide
// Hide delay in ms
autoHideTimeout={1000}
// Duration for hide animation in ms.
autoHideDuration={200}>
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
            <h3 >A collection of some of my recent projects.</h3>
            <h4 className='sub-title-proj'>Web development and testing. </h4>    
            <div className='cards-container'>
            <Card103 />
            <Card101 />
            <Card100 />
            <Card99 />
            <Card98 />
            </div>
            
            <div style={{backgroundColor: '#f6f6f6'}}>
            <h4 className='sub-title-proj' >Data-oriented, data science and machine learning projects.</h4> 
            <div className='cards-container'>
            <Card97 />
            <Card96 />
            <Card95 />
            </div>
            </div>


            <h4 className='sub-title-proj'>Authored packages.</h4> 
            <div className='cards-container'>
            <Card102 />
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
    </Scrollbars>
  );

};

export default Projects;
