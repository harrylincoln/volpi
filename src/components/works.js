import React from "react";
import { Row, Col } from 'reactstrap';
import ImageZoom from 'react-medium-image-zoom'
export const Me = () => (
  <div style={{paddingBottom: '6rem'}}>
    <h2>Hi there, I’m Anabella. <br />
    User experience designer based in London.</h2>
  </div>
);

export const UCA = () => (
    <div>
      <h2>Universal claim app</h2>
      <p className="details">Client: Elsevier <br />
      Role: Sr UX Designer<br />
      Elsevier 2018</p>
      <hr className="thick"/>
      <Row>
        <Col xs="12" md="8">
          <h3>About Elsevier</h3>
          <p>Elsevier is  an information and analytics company and one of the world's major providers of scientific, technical and medical information. 
            Elsevier publishes more than 430,000 articles annually in 2,500 journals. Total yearly downloads amount to more than 900 million.</p>
          <p>Elsevier owns a big number of products which I’m going to refer to as the/an 'ecosystem'</p>
        </Col>
        <Col xs="12" md="8" className="section-block">
          <h3>The Challenge</h3>
          <p>Every publishing author gets an an author ID after their first academic paper is submitted, accepted and consequently published through any of the Elsevier submission systems.</p>
          <p>Data about users is not shared across products; the same user can register using different login details on each of Elsevier products.</p>
          <p>In addition, we can’t automatically connect accounts to IDs as we are dealing with very sensitive information and a bad use of it might cause significant damage to the user's academic career.</p>
        </Col>
        <Col xs="12" md="8" className="section-block">
          <h3>The brief</h3>
          <p>We are going to build a universal app for Elsevier users. 
            In this app they will be able to search for their ID and claim their author profile. 
            This will allow us to connect all their Elsevier accounts. 
          </p>
        </Col>
        <Col xs="12" md="8" className="section-block">
          <h3>Gathering requirements</h3>
          <p>I ran workshops with colleagues from different products, developers, project managers, etc. 
            Each Elsevier product has its own way of operatating, its own unique users and I needed to understand what other teams worked on in the past.
            I needed them to tell me what their users were like before I could come up with my own research plan. 
          </p>
          <ImageZoom
          shouldReplaceImage={true}
            image={{
              src: `${process.env.PUBLIC_URL}/postit1-small.jpg`,
              alt: 'Gathering requirements 1',
              className: 'img',
              style: { width: '100%' }
            }}
            zoomImage={{
              src: `${process.env.PUBLIC_URL}/postit1.jpg`,
              alt: 'Gathering requirements 1'
            }}
          />
          <Row style={{marginTop: '1.35rem'}}>
            <Col xs="12" md="7">
              <ImageZoom
              shouldReplaceImage={true}
              image={{
                src: `${process.env.PUBLIC_URL}/postit2-small.jpg`,
                alt: 'Gathering requirements 2',
                className: 'img',
                style: { width: '100%' }
              }}
              zoomImage={{
                src: `${process.env.PUBLIC_URL}/postit2.jpg`,
                alt: 'Gathering requirements 2'
              }}
            />
            </Col>
            <Col xs="12" md="5">
              <ImageZoom
              shouldReplaceImage={true}
              image={{
                src: `${process.env.PUBLIC_URL}/postit3-small.jpg`,
                alt: 'Gathering requirements 3',
                className: 'img',
                style: { width: '100%' }
              }}
              zoomImage={{
                src: `${process.env.PUBLIC_URL}/postit3.jpg`,
                alt: 'Gathering requirements 3'
              }}
            />
            </Col>
          </Row>
        </Col>
        <Col xs="12" md="8" className="section-block">
          <h3>Research</h3>
          <p>As a Sr UX Designer I came up with the following research plan</p>

          <h5>Quantitative research</h5>
          <ul>
            <li>Survey - Sent out to 1k of Elsevier users</li>
            <li>611 published authors participated</li>
          </ul>
          <p>The Survey allowed us to quickly target different needs depending on career level.</p>
              <ImageZoom
              shouldReplaceImage={true}
              image={{
                src: `${process.env.PUBLIC_URL}/users.jpg`,
                alt: 'Group of users',
                className: 'img',
                style: { width: '100%' }
              }}
              zoomImage={{
                src: `${process.env.PUBLIC_URL}/users.jpg`,
                alt: 'Group of users'
              }}
            />
            <p className="caption">Our main groups of users</p>
            <Row style={{marginTop: '1.35rem'}}>
              <Col xs="12" md="6">
                <ImageZoom
                shouldReplaceImage={true}
                    image={{
                      src: `${process.env.PUBLIC_URL}/user-values.jpg`,
                      alt: 'User values',
                      className: 'img',
                      style: { width: '100%' }
                    }}
                    zoomImage={{
                      src: `${process.env.PUBLIC_URL}/user-values.jpg`,
                      alt: 'User values'
                    }}
                  />
                  <p className="caption">User values 1</p>
              </Col>
              <Col xs="12" md="6">
                <ImageZoom
                shouldReplaceImage={true}
                image={{
                  src: `${process.env.PUBLIC_URL}/user-values2.jpg`,
                  alt: 'User values 2',
                  className: 'img',
                  style: { width: '100%' }
                }}
                zoomImage={{
                  src: `${process.env.PUBLIC_URL}/user-values2.jpg`,
                  alt: 'User values 2'
                }}
              />
              <p className="caption">User values 2</p>
            </Col>
          </Row>
          <Col xs="12" className="section-block">
          <h5>Qualitative research</h5>
            <ul>
              <li>Face to face interviews - 20 authors of which 17 have published</li>
              <li>Remote interviews - 6 authors all of them published</li>
            </ul>
            <p>I worked on scripts, prototypes and a report where I put all the research findings</p>
          </Col>
          <Col xs="12" md="12" className="section-block">
            <h3>User flows</h3>
            <Row>
              <Col xs="12" md="6">
                <ImageZoom
                shouldReplaceImage={true}
                    image={{
                      src: `${process.env.PUBLIC_URL}/existing-user-flow-small.jpg`,
                      alt: 'Existing user flow',
                      className: 'img',
                      style: { width: '100%' }
                    }}
                    zoomImage={{
                      src: `${process.env.PUBLIC_URL}/existing-user-flow.jpg`,
                      alt: 'Existing user flow'
                    }}
                  />
              </Col>
              <Col xs="12" md="6">
                <ImageZoom
                shouldReplaceImage={true}
                image={{
                  src: `${process.env.PUBLIC_URL}/new-user-flow-small.jpg`,
                  alt: 'New user flow',
                  className: 'img',
                  style: { width: '100%' }
                }}
                zoomImage={{
                  src: `${process.env.PUBLIC_URL}/new-user-flow.jpg`,
                  alt: 'New user flow'
                }}
              />
            </Col>
          </Row>
          <p>While I was working on the user flows I realised we had so much unused resources and this is 
              why, alongside developers, we created a kind of plan to explore everything we thought it might help 
              us to deliver the best possible experience. Of course, we still needed to meet a deadline but 
              I’ve always pushed for a way to record all of our ideas, even if they were impossible to action 
              at the time.</p>
              <p>So we came up woth three exploratory 'buckets'</p>
              <p>1. Exploration for MVP<br/>
              2. Exploration for next release <br />
              3. Exploration fo future releases
              </p>
              <p>This way we knew from the beginning of any technical constraints but also all the possible options 
                we had and a plan that would go beyond us in case the team members moved projects.</p>
          </Col>
          <Col xs="12" md="12" className="section-block">
          <h3>Wireframes and prototypes</h3>
          <p>The idea was to make it quick and easy for the user. Academics are busy people and they don’t 
            want to be distracted from the work they’re doing when they’re in front of a computer.</p>
            <p>1. First iteration: making the user participate, 
              they give us information and we will give them results based on that</p>
            <p>2. Second iteration: Instead of asking for information before showing results.
            We show results and then let the users adjust the search by using the filters</p>
            <p>3. Third and final iteration: </p>
            <Row>
              <Col xs="12" md="4">
                <ImageZoom
                shouldReplaceImage={true}
                    image={{
                      src: `${process.env.PUBLIC_URL}/proto-small.jpg`,
                      alt: 'Proto',
                      className: 'img',
                      style: { width: '100%' }
                    }}
                    zoomImage={{
                      src: `${process.env.PUBLIC_URL}/proto.jpg`,
                      alt: 'Proto'
                    }}
                  />
              </Col>
              <Col xs="12" md="4">
                <ImageZoom
                shouldReplaceImage={true}
                image={{
                  src: `${process.env.PUBLIC_URL}/proto2-small.jpg`,
                  alt: 'Proto 2',
                  className: 'img',
                  style: { width: '100%' }
                }}
                zoomImage={{
                  src: `${process.env.PUBLIC_URL}/proto2.jpg`,
                  alt: 'Proto 2'
                }}
              />
            </Col>
            <Col xs="12" md="4">
                <ImageZoom
                shouldReplaceImage={true}
                image={{
                  src: `${process.env.PUBLIC_URL}/proto3-small.jpg`,
                  alt: 'Proto 3',
                  className: 'img',
                  style: { width: '100%' }
                }}
                zoomImage={{
                  src: `${process.env.PUBLIC_URL}/proto3.jpg`,
                  alt: 'Proto 3'
                }}
              />
            </Col>
          </Row>
          </Col>
          <Col xs="12" className="section-block">
            <h3>A/B Testing</h3>
            <p>We tested different copy, promotional messages and UI.</p>
            <ImageZoom
            shouldReplaceImage={true}
              image={{
                src: `${process.env.PUBLIC_URL}/abtest-small.jpg`,
                alt: 'A/B Test',
                className: 'img',
                style: { width: '100%' }
              }}
              zoomImage={{
                src: `${process.env.PUBLIC_URL}/abtest.jpg`,
                alt: 'A/B Test'
              }}
            />
            <p>The example above shows how a change of copy and style of a CTA had a massive impact on conversions</p>
            <p>A cta: ‘Add’ / link visual style</p>
            <p>B cta ‘It’s me’ / button visual style</p>
          </Col>
          <Col xs="12" className="section-block">
            <h3>Deliverables</h3>
            <p>I delivered all design specs and paired with developers to make sure everything was implemented the way I designed it.</p>
            <Row>
                <Col xs="12" md="6">
                  <ImageZoom
                  shouldReplaceImage={true}
                      image={{
                        src: `${process.env.PUBLIC_URL}/uca-deliverable1-small.jpg`,
                        alt: 'uca-deliverable1',
                        className: 'img',
                        style: { width: '100%' }
                      }}
                      zoomImage={{
                        src: `${process.env.PUBLIC_URL}/uca-deliverable1.jpg`,
                        alt: 'uca-deliverable1'
                      }}
                    />
                </Col>
                <Col xs="12" md="6">
                  <ImageZoom
                  shouldReplaceImage={true}
                      image={{
                        src: `${process.env.PUBLIC_URL}/uca-deliverable2-small.jpg`,
                        alt: 'uca-deliverable2-small',
                        className: 'img',
                        style: { width: '100%' }
                      }}
                      zoomImage={{
                        src: `${process.env.PUBLIC_URL}/uca-deliverable2.jpg`,
                        alt: 'uca-deliverable2'
                      }}
                    />
                </Col>
                <Col xs="12">
                <ImageZoom
                  shouldReplaceImage={true}
                      image={{
                        src: `${process.env.PUBLIC_URL}/uca-deliverable3-small.jpg`,
                        alt: 'uca-deliverable3-small',
                        className: 'img',
                        style: { width: '100%' }
                      }}
                      zoomImage={{
                        src: `${process.env.PUBLIC_URL}/uca-deliverable3.jpg`,
                        alt: 'uca-deliverable3'
                      }}
                    />
                </Col>
                <Col xs="12">
                <ImageZoom
                  shouldReplaceImage={true}
                    image={{
                      src: `${process.env.PUBLIC_URL}/deliverables-small.jpg`,
                      alt: 'Deliverables',
                      className: 'img',
                      style: { width: '100%' }
                    }}
                    zoomImage={{
                      src: `${process.env.PUBLIC_URL}/deliverables.jpg`,
                      alt: 'Deliverables'
                    }}
                  />
                </Col>
              </Row>

          </Col>
        </Col>
      </Row>
    </div>
);
  
export const BrowserEx = () => (
  <div>
    <h2>Browser Extension</h2>
    <p className="details">Client: Elsevier <br />
    Role: Sr UX Designer<br />
    Elsevier 2018</p>
    <hr className="thick"/>
    <Row>
      <Col xs="12" md="8">
        <h3>About Mendeley</h3>
        <p>Mendeley is a PDF and reference management application for desktop and web, produced by Elsevier. 
          Users can also manage and share research papers, discover research data and collaborate online.</p>
      </Col>
      <Col xs="12" md="8" className="section-block">
        <h3>The challenge</h3>
        <ul>
          <li>Update current browser extension, give our users new features.</li>
        </ul>
        <p><b>Problems</b></p>
        <ul>
          <li>Time: most of researches don’t have enough time to decide immediately 
            whether an article is relevant to their work or not.</li>
          <li>Credentials: there’s some literature that researchers can only access 
            through the institution’s network they work/study in. This means when 
            they’re not at their workplace they have no way to access some of the content.</li>
        </ul>
        <p><b>The brief</b></p>
        <ul>
          <li>Allow users to save a batch of articles to their Mendeley library in one go</li>
          <li>Review what can be done to solve the issue with institutions’ credentials and authentication</li>
        </ul>
      </Col>
      <Col xs="12" md="8" className="section-block">
        <h3>Gathering requirements</h3>
        <p>I started with a <b>competitor analysis.</b> This helped me to understand a few things:</p>
          <p>1. What our competitors were doing<br />
          <ul className="no-list-style">
            <li>a: Is there any way we can offer a better experience/solution?</li>
            <li>b: What would make us stand out?</li>
          </ul>
          2. Understand how and why they offer the features they do. Why do they decide to include 
          (or exclude) features<br />
          <ul className="no-list-style">
              <li>a: Because of technical constrains?</li>
              <li>b: Because they found out through research that users were not interested in that?</li>
          </ul>
        </p>
        <ImageZoom
          shouldReplaceImage={true}
          image={{
            src: `${process.env.PUBLIC_URL}/requirement-small.jpg`,
            alt: 'requirement',
            className: 'img',
            style: { width: '100%' }
          }}
          zoomImage={{
            src: `${process.env.PUBLIC_URL}/requirement.jpg`,
            alt: 'requirement'
          }}
        />
      </Col>
      <Col xs="12" md="8" className="section-block">
        <h3>Personas</h3>
        <p>Together with the product owner and lead designer we worked on 
          two main personas. First one belongs to our biggest group of users 
          (researchers) and the other is the group of users the company wants 
          to target (librarians)</p>
          <Row>
              <Col xs="12" md="4">
                <ImageZoom
                shouldReplaceImage={true}
                    image={{
                      src: `${process.env.PUBLIC_URL}/persona-small.jpg`,
                      alt: 'persona',
                      className: 'img',
                      style: { width: '100%' }
                    }}
                    zoomImage={{
                      src: `${process.env.PUBLIC_URL}/persona.jpg`,
                      alt: 'persona'
                    }}
                  />
              </Col>
              <Col xs="12" md="4">
                <ImageZoom
                shouldReplaceImage={true}
                image={{
                  src: `${process.env.PUBLIC_URL}/persona2-small.jpg`,
                  alt: 'persona 2',
                  className: 'img',
                  style: { width: '100%' }
                }}
                zoomImage={{
                  src: `${process.env.PUBLIC_URL}/persona2.jpg`,
                  alt: 'persona 2'
                }}
              />
            </Col>
            <Col xs="12" md="4">
                <ImageZoom
                shouldReplaceImage={true}
                image={{
                  src: `${process.env.PUBLIC_URL}/persona3-small.jpg`,
                  alt: 'persona 3',
                  className: 'img',
                  style: { width: '100%' }
                }}
                zoomImage={{
                  src: `${process.env.PUBLIC_URL}/persona3.jpg`,
                  alt: 'persona 3'
                }}
              />
            </Col>
          </Row>
      </Col>
      <Col xs="12" md="8" className="section-block">
        <h5>Empathy maps</h5>
        <ImageZoom
        shouldReplaceImage={true}
          image={{
            src: `${process.env.PUBLIC_URL}/empathy-small.jpg`,
            alt: 'empathy',
            className: 'img',
            style: { width: '100%' }
          }}
          zoomImage={{
            src: `${process.env.PUBLIC_URL}/empathy.jpg`,
            alt: 'empathy'
          }}
        />
        <p className="caption">Researcher</p>
      </Col>
      <Col xs="12" md="8" className="section-block">
        <h5>Scenarios and User journeys</h5>
        <ImageZoom
        shouldReplaceImage={true}
          image={{
            src: `${process.env.PUBLIC_URL}/main-persona-small.jpg`,
            alt: 'main-persona',
            className: 'img',
            style: { width: '100%' }
          }}
          zoomImage={{
            src: `${process.env.PUBLIC_URL}/main-persona.jpg`,
            alt: 'main-persona'
          }}
        />
        <p className="caption">Scenario for main persona (researcher)</p>
      </Col>
      <Col xs="12" md="8" className="section-block">
          <p>We did a small workshop with the product owner and tech lead, 
            we created a typical day in a researchers life. Lots of questions 
            came up from this exercise. From technical to legal stuff, 
            each one of us left the room with homework to do:</p>
            <ul>
              <li>Product: find out about legal compliance, for example 
                institutions giving permission through proxies.</li>
                <li>Technical: is there any short term solution to the authentication 
                  and credentials issue? How long would it take to have a beta version 
                  up and running?</li>
                <li>UX: Come up with a plan to validate all these implications are true.
                  We know not having access to papers outside the institution network is 
                  an issue but it is that the main use case?</li>
            </ul>
      </Col>
      <Col xs="12" md="8" className="section-block">
        <h5>Scernario sketches from workshop</h5>
        <Row>
            <Col xs="12" md="6">
              <ImageZoom
              shouldReplaceImage={true}
                  image={{
                    src: `${process.env.PUBLIC_URL}/scenario-small.jpg`,
                    alt: 'Scenario',
                    className: 'img',
                    style: { width: '100%' }
                  }}
                  zoomImage={{
                    src: `${process.env.PUBLIC_URL}/scenario-flow.jpg`,
                    alt: 'Scenario'
                  }}
                />
            </Col>
            <Col xs="12" md="6">
              <ImageZoom
              shouldReplaceImage={true}
              image={{
                src: `${process.env.PUBLIC_URL}/scenario2-small.jpg`,
                alt: 'scenario 2',
                className: 'img',
                style: { width: '100%' }
              }}
              zoomImage={{
                src: `${process.env.PUBLIC_URL}/scenario2.jpg`,
                alt: 'scenario 2'
              }}
            />
            </Col>
          </Row>
      </Col>
      <Col xs="12" md="8" className="section-block">
        <h5>Scenarios documentation</h5>
        <Row>
            <Col xs="12" md="4">
              <ImageZoom
              shouldReplaceImage={true}
                  image={{
                    src: `${process.env.PUBLIC_URL}/scenario-docs.jpg`,
                    alt: 'Scenario-docs',
                    className: 'img',
                    style: { width: '100%' }
                  }}
                  zoomImage={{
                    src: `${process.env.PUBLIC_URL}/scenario-docs.jpg`,
                    alt: 'Scenario-docs'
                  }}
                />
            </Col>
            <Col xs="12" md="4">
              <ImageZoom
              shouldReplaceImage={true}
              image={{
                src: `${process.env.PUBLIC_URL}/scenario-docs2.jpg`,
                alt: 'scenario-docs 2',
                className: 'img',
                style: { width: '100%' }
              }}
              zoomImage={{
                src: `${process.env.PUBLIC_URL}/scenario-docs2.jpg`,
                alt: 'scenario-docs 2'
              }}
            />
            </Col>
            <Col xs="12" md="4">
              <ImageZoom
              shouldReplaceImage={true}
              image={{
                src: `${process.env.PUBLIC_URL}/scenario-docs3.jpg`,
                alt: 'scenario-docs 3',
                className: 'img',
                style: { width: '100%' }
              }}
              zoomImage={{
                src: `${process.env.PUBLIC_URL}/scenario-docs3.jpg`,
                alt: 'scenario-docs 3'
              }}
            />
            </Col>
            <Col xs="12" md="4">
              <ImageZoom
              shouldReplaceImage={true}
              image={{
                src: `${process.env.PUBLIC_URL}/scenario-docs4.jpg`,
                alt: 'scenario-docs 4',
                className: 'img',
                style: { width: '100%' }
              }}
              zoomImage={{
                src: `${process.env.PUBLIC_URL}/scenario-docs4.jpg`,
                alt: 'scenario-docs 4'
              }}
            />
            </Col>
            <Col xs="12" md="4">
              <ImageZoom
              shouldReplaceImage={true}
              image={{
                src: `${process.env.PUBLIC_URL}/scenario-docs5.jpg`,
                alt: 'scenario-docs 5',
                className: 'img',
                style: { width: '100%' }
              }}
              zoomImage={{
                src: `${process.env.PUBLIC_URL}/scenario-docs5.jpg`,
                alt: 'scenario-docs 5'
              }}
            />
            </Col>
            <Col xs="12" md="4">
              <ImageZoom
              shouldReplaceImage={true}
              image={{
                src: `${process.env.PUBLIC_URL}/scenario-docs6.jpg`,
                alt: 'scenario-docs 6',
                className: 'img',
                style: { width: '100%' }
              }}
              zoomImage={{
                src: `${process.env.PUBLIC_URL}/scenario-docs6.jpg`,
                alt: 'scenario-docs 6'
              }}
            />
            </Col>
          </Row>
      </Col>
      <Col xs="12" md="8" className="section-block">
        <h3>Research plan</h3>
        <p>There was a first release of this browser extension so I thought of 
        going back to previous research that was done for the current version. 
        Of course, all these research was outdated so I had to come up with a new plan.</p>

        <p>We tested the first iteration with 9 people from different career levels, 
          Mendeley users and non Mendeley users</p>

        <p>After having a more or less clear idea of what we can and we can’t 
          do I started working on a few sketches, wireframes.</p>
          <ImageZoom
          shouldReplaceImage={true}
              image={{
                src: `${process.env.PUBLIC_URL}/wireframes-small.jpg`,
                alt: 'scenario-docs 6',
                className: 'img',
                style: { width: '100%' }
              }}
              zoomImage={{
                src: `${process.env.PUBLIC_URL}/wireframes.jpg`,
                alt: 'scenario-docs 6'
              }}
            />
      </Col>
      <Col xs="12" md="8" className="section-block">
        <h3>Deliverables</h3>
        <Row>
            <Col xs="12" md="6">
              <ImageZoom
              shouldReplaceImage={true}
                  image={{
                    src: `${process.env.PUBLIC_URL}/browser-deliverable1-small.jpg`,
                    alt: 'browser-deliverable1',
                    className: 'img',
                    style: { width: '100%' }
                  }}
                  zoomImage={{
                    src: `${process.env.PUBLIC_URL}/browser-deliverable1.jpg`,
                    alt: 'browser-deliverable1'
                  }}
                />
            </Col>
            <Col xs="12" md="6">
              <ImageZoom
              shouldReplaceImage={true}
                  image={{
                    src: `${process.env.PUBLIC_URL}/browser-deliverable2-small.jpg`,
                    alt: 'browser-deliverable2-small',
                    className: 'img',
                    style: { width: '100%' }
                  }}
                  zoomImage={{
                    src: `${process.env.PUBLIC_URL}/browser-deliverable2.jpg`,
                    alt: 'browser-deliverable2'
                  }}
                />
            </Col>
            <Col xs="12">
            <ImageZoom
              shouldReplaceImage={true}
                  image={{
                    src: `${process.env.PUBLIC_URL}/browser-deliverable3-small.jpg`,
                    alt: 'browser-deliverable3-small',
                    className: 'img',
                    style: { width: '100%' }
                  }}
                  zoomImage={{
                    src: `${process.env.PUBLIC_URL}/browser-deliverable3.jpg`,
                    alt: 'browser-deliverable3'
                  }}
                />
            </Col>
          </Row>
      </Col>
    </Row>
  </div>
);

export const Orange = () => (
  <>
  <h2>Orange Cash</h2>
    <p className="details">Client: Orange <br />
    Role: Sr UX/UI Designer<br />
    Orange, 2015</p>
    <hr className="thick"/>
    <Row>
      <Col xs="12" md="8">
        <h3>The brief</h3>
        <p>Create an app that will be available for Orange customers that allows 
          users to make payments directly from their mobile without the need of 
          using their ‘real’ credit cards. </p>
      </Col>
      <Col xs="12" md="8" className="section-block">
        <h3>Gathering requirements</h3>
        <p>During the initial meetings with the team I realised this was going to be 
          too big to handle as a whole. We had four months to deliver a first mvp 
          and no clear idea on what to tackle first.<br/>
          I proposed we split the work into four parts:</p>
        <p><b>Awareness:</b> How Orange advertises its new product to their existent customers.<br/>
        <b>Activation:</b> All the different steps users have go through in order to start paying for goods.<br/>
        <b>Use:</b> Add money to their accounts, pay.<br/>
        <b>Manage:</b> Everything related to users accounts, help, access to customer service</p>
        <ImageZoom
        shouldReplaceImage={true}
            image={{
              src: `${process.env.PUBLIC_URL}/requirements.jpg`,
              alt: 'requirements',
              className: 'img',
              style: { width: '100%' }
            }}
            zoomImage={{
              src: `${process.env.PUBLIC_URL}/requirements.jpg`,
              alt: 'requirements'
            }}
          />
        <p style={{marginTop:'1rem'}}>As I mentioned before this project was so big I’m just going to show how 
          I worked the activation case. There are two different journeys depending on 
          what network users are on. Naturally, if users are on Orange network the 
          authentication will take less time and fewer steps, this is because it’s 
          easier to verify their identity, phone number and device.</p>
        <p>On wifi, we need users to actively participate in the authentication process. 
          Answering security questions and giving us their Orange customer information 
          so we can match with our database.</p>
          <ImageZoom
          shouldReplaceImage={true}
            image={{
              src: `${process.env.PUBLIC_URL}/auth.jpg`,
              alt: 'auth',
              className: 'img',
              style: { width: '100%' }
            }}
            zoomImage={{
              src: `${process.env.PUBLIC_URL}/auth.jpg`,
              alt: 'auth'
            }}
          />
          <p>After we agreed on the first use case, I delivered some basic wireframes. 
            Given the little time we had I considered it was essential that every person 
            who was part of the project worked on their part at the same time I was 
            delivering the first sketches. </p>
      </Col>
      <Col xs="12" md="8" className="section-block">
        <h3>Testing</h3>
        <p>As this app would only be available in France and Spain, 
          I only participated on the prototype and script making and not facilitating the sessions.<br/>
          French and Spanish researchers tested the prototype with 9 people.</p>
          <ImageZoom
          shouldReplaceImage={true}
            image={{
              src: `${process.env.PUBLIC_URL}/welcome-small.jpg`,
              alt: 'welcome',
              className: 'img',
              style: { width: '100%' }
            }}
            zoomImage={{
              src: `${process.env.PUBLIC_URL}/welcome.jpg`,
              alt: 'welcome'
            }}
          />
      </Col>
      <Col xs="12" md="8" className="section-block">
        <h3>Visuals</h3>
        <p>I worked on all the key screens of the app. Created a visual language that I 
          put in guidelines documents so other designers can help out in case we needed 
          a hand (and yes, we did)</p>
          <Col xs="12" style={{marginBottom:'1rem'}}>
              <ImageZoom
                  image={{
                    src: `${process.env.PUBLIC_URL}/hand-edit.jpg`,
                    alt: 'ikea',
                    className: 'img',
                    style: { width: '100%' }
                  }}
              />
          </Col>
          <p>For the illustrations I had a few meetings with a professional illustrator 
            and we agreed on the style</p>
            <ImageZoom
            style={{marginBottom:'1rem'}}
                shouldReplaceImage={true}
                  image={{
                    src: `${process.env.PUBLIC_URL}/bonjour-small.jpg`,
                    alt: 'bonjour',
                    className: 'img',
                    style: { width: '100%' }
                  }}
                  zoomImage={{
                    src: `${process.env.PUBLIC_URL}/bonjour.jpg`,
                    alt: 'bonjour'
                  }}
              />
          <Row style={{marginTop:'1rem'}}>
            <Col xs="12" md="7" style={{marginBottom:'1rem'}}>
              <ImageZoom
                shouldReplaceImage={true}
                  image={{
                    src: `${process.env.PUBLIC_URL}/bag-small.jpg`,
                    alt: 'bag',
                    className: 'img',
                    style: { width: '100%' }
                  }}
                  zoomImage={{
                    src: `${process.env.PUBLIC_URL}/bag.jpg`,
                    alt: 'bag'
                  }}
              />
            </Col>
            <Col xs="12" md="5" style={{marginBottom:'1rem'}}>
              <ImageZoom
                shouldReplaceImage={true}
                  image={{
                    src: `${process.env.PUBLIC_URL}/icecream-small.jpg`,
                    alt: 'icecream',
                    className: 'img',
                    style: { width: '100%' }
                  }}
                  zoomImage={{
                    src: `${process.env.PUBLIC_URL}/icecream.jpg`,
                    alt: 'icecream'
                  }}
              />
            </Col>  
          </Row>
          <Row>
            <Col xs="12" md="5" style={{marginBottom:'1rem'}}>
              <ImageZoom
                shouldReplaceImage={true}
                  image={{
                    src: `${process.env.PUBLIC_URL}/medi-small.jpg`,
                    alt: 'medi',
                    className: 'img',
                    style: { width: '100%' }
                  }}
                  zoomImage={{
                    src: `${process.env.PUBLIC_URL}/medi.jpg`,
                    alt: 'medi'
                  }}
              />
            </Col>
            <Col xs="12" md="7" style={{marginBottom:'1rem'}}>
              <ImageZoom
                shouldReplaceImage={true}
                  image={{
                    src: `${process.env.PUBLIC_URL}/champers-small.jpg`,
                    alt: 'champers',
                    className: 'img',
                    style: { width: '100%' }
                  }}
                  zoomImage={{
                    src: `${process.env.PUBLIC_URL}/champers.jpg`,
                    alt: 'champers'
                  }}
              />
            </Col>  
          </Row>
        </Col>
    </Row>    
  </>
);
