import React, { useState } from "react";

const Card = (query) => {

    //background useStates and Function
    const [bckColor, setBckColor] = useState('#8459c7')
    //console.log(test)

    //H1 useStates and Function
    const [head1, setHead1] = useState('#422785')
    const [head1FontColor, setHead1FontColor] = useState('#D7CAEA')
    const [head1FontAlign, setHead1FontAlign] = useState('left')
    //H2 useStates and Function
    const [head2, setHead2] = useState('#422785')
    const [head2FontColor, setHead2FontColor] = useState('#D7CAEA')
    const [head2FontAlign, setHead2FontAlign] = useState('left')
    //H3 useStates and Function
    const [head3, setHead3] = useState('#422785')
    const [head3FontColor, setHead3FontColor] = useState('#D7CAEA')
    const [head3FontAlign, setHead3FontAlign] = useState('left')
    //p tag useStates and functions
    const [parBack, setParBack] = useState('');
    const [parColor, setParColor] = useState('#D7CAEA');
    const [fntSz, setFntSz] = useState('16px')
    const [txtDeco,setTxtDeco] = useState('underline');
    const [txtAlign, setTxtAlign] = useState('');
    const [fntFamily, setFntFamily] = useState('Oldtown');
    const [txtStyle, setTxtStyle] = useState('');
    //button useStates and functions
    const [butRadius, setButRadius] = useState('5px');
    const [boxShadowX, setBoxShadowX] = useState('5px');
    const [boxShadowY, setBoxShadowY] = useState('.5px');
    const [boxShadowBlur, setBoxShadowBlur] = useState('.5px');
    const [boxShadowColor, setBoxShadowColor] = useState('#422785');
    const [butFntFamily, setButFntFamily] = useState('Oldtown');
    const [butWidth, setButWidth] = useState('');
    const [butHeight, setButHeight] = useState('');
    //list and listitem use States and functions
    const [liBgColor, setLiBgColor] = useState('#D7CAEA');
    const [liTxtColor, setLiTxtColor] = useState('#422785')
    const [liWidth, setLiWidth] = useState('300px');
    const [liPadding, setLiPadding] = useState('10px'); 
    const [liStyle, setLiStyle] = useState('none');

    const styles = {
        background: {
            margin: '0 auto',
            marginTop: '20px',
            maxWidth: '600px',
            //height: '300px',
            backgroundColor: `${bckColor}`,
            display: '',
            flexDirection: 'column',
            overflow: 'hidden',
        },
        heading1: {
            paddingTop: '5px',
            marginTop: '0',
            marginBottom: '2.5px',
            paddingBottom: '5px',
            paddingLeft: '15px',
            paddingRight: '15px',
            maxWidth: '600px',
            color: `${head1FontColor}`,
            backgroundColor: `${head1}`,
            textAlign: `${head1FontAlign}`,
            display: ''
        },
        heading2: {
            paddingTop: '5px',
            marginTop: '2.5px',
            marginBottom: '2.5px',
            paddingBottom: '5px',
            paddingLeft: '15px',
            paddingRight: '15px',
            maxWidth: '600px',
            color: `${head2FontColor}`,
            backgroundColor: `${head2}`,
            textAlign: `${head2FontAlign}`
        },
        heading3: {
            paddingTop: '5px',
            marginTop: '2.5px',
            marginBottom: '2.5px',
            paddingBottom: '5px',
            paddingLeft: '15px',
            paddingRight: '15px',
            maxWidth: '570px',
            width: '600px',
            color: head3FontColor,
            backgroundColor: head3,
            textAlign: head3FontAlign,
        },
        heading4: {
            textAlign: 'center',
            marginTop: '5px',
            marginBottom: '5px',
        },
        par: {
            marginLeft: '15px',
            marginRight: '15px',
            backgroundColor: parBack,
            color: parColor,            
            textDecoration: txtDeco,
            textAlign: txtAlign,
            fontFamily: fntFamily,
            fontSize: fntSz,
            fontStyle: txtStyle,
        },
        but: {
            marginLeft: '15px',
            borderRadius: butRadius,
            boxShadow: `${boxShadowX} ${boxShadowY} ${boxShadowBlur} ${boxShadowColor}`,
            fontFamily: butFntFamily,
            width: butWidth,
            height: butHeight,
        },
        bxshdwinput: {
            width: '50px'
        },
        list: {
            margin: '15px',
            height: 'auto',
            backgroundColor: liBgColor,
            color: liTxtColor,
            width: liWidth,
            paddingTop: liPadding,
            paddingBottom: liPadding,
            listStyle: liStyle,
        },
        item: {

        },
        changers: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            flex: '20px',
            margin: '0 auto',
            marginTop: '10px',
            paddingTop: '10px',
            padding: '10px',
            paddingBottom: '10px',
            maxWidth: '600px',
            backgroundColor: '#C6D6FC',
            border: 'solid #021645',
            borderRadius: 20,
            
        },
        input: {
            maxWidth: '80px'
        },
        span: {
            marginLeft: '15px',
        }
        

    }

    return (
        <div>
            <div style={styles.background}>
                <h1 style={styles.heading1}>Heading 1</h1>
                <h2 style={styles.heading2}>Heading 2</h2>
                <h3 style={styles.heading3}>Heading 3</h3>
                <p style={styles.par}>This is a paragraph tag</p>
                <button style={styles.but}>Button</button>
                <ul style={styles.list}>
                    <li style={styles.item}>Item1</li>
                    <li style={styles.item}>Item2</li>
                    <li style={styles.item}>Item3</li>
                </ul>
            </div>
            <h4 style={styles.heading4}>Main</h4>
            <div style={styles.changers} >
                <span>
                    Background <input 
                        style={styles.input}
                        type="search"
                        placeholder={bckColor}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setBckColor(e.target.value);
                            }
                        }}
                    />
                    {/* <button onClick={makeChange}>Change</button> */}
                </span>
            </div>
            <h4 style={styles.heading4}>H1</h4>
            <div style={styles.changers}>
                <span>
                    Background  <input
                        style={styles.input}
                        type="search"
                        placeholder={head1}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setHead1(e.target.value);
                            }
                        }}
                    />
                </span>
                <br/>
                <span>
                    Font Color  <input 
                        style={styles.input}
                        type="search"
                        placeholder={head1FontColor}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setHead1FontColor(e.target.value);
                            }
                        }}
                    />
                </span>
                <br/>
                <span>
                    Font Align  <input
                        style={styles.input} 
                        type="search"
                        placeholder={head1FontAlign}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setHead1FontAlign(e.target.value);
                            }
                        }}
                    />
                </span>
            </div>
            <h4 style={styles.heading4}>H2</h4>
            <div style={styles.changers}>
                <span>
                    Background  <input
                        style={styles.input} 
                        type="search"
                        placeholder={head2}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setHead2(e.target.value);
                            }
                        }}
                    />
                </span>
                <br/>
                <span>
                    Font Color  <input
                        style={styles.input} 
                        type="search"
                        placeholder={head2FontColor}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setHead2FontColor(e.target.value);
                            }
                        }}
                    />
                </span>
                <br/>
                <span>
                    Font Align  <input 
                        style={styles.input}
                        type="search"
                        placeholder={head2FontAlign}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setHead2FontAlign(e.target.value);
                            }
                        }}
                    />
                </span>
            </div>
            <h4 style={styles.heading4}>H3</h4>
            <div style={styles.changers}>
                <span>
                    Background  <input
                        style={styles.input} 
                        type="search"
                        placeholder={head3}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setHead3(e.target.value);
                            }
                        }}
                    />
                </span>

                <span>
                    Font Color  <input 
                        style={styles.input}
                        type="search"
                        placeholder={head3FontColor}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setHead3FontColor(e.target.value);
                            }
                        }}
                    />
                </span>
                <br/>
                <span>
                    Font Align  <input
                        style={styles.input} 
                        type="search"
                        placeholder={head3FontAlign}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setHead3FontAlign(e.target.value);
                            }
                        }}
                    />
                </span>
            </div>

            <h4 style={styles.heading4}>Paragraph</h4>
            <div style={styles.changers}>
                
                <span >
                    Background  <input 
                        style={styles.input}
                        type="search"
                        placeholder={parBack}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setParBack(e.target.value);
                            }
                        }}
                    />
                </span>

                <span >
                    Color  <input 
                        style={styles.input}
                        type="search"
                        placeholder={parColor}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                if (e.target.value === '') {
                                    setParColor('#D7CAEA')
                                } else {
                                    setParColor(e.target.value);
                                }
                                
                            }
                        }}
                    />
                </span>
                
                <span >
                    Font Size  <input 
                        style={styles.input}
                        type="search"
                        placeholder={fntSz}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setFntSz(e.target.value);
                            }
                        }}
                    />
                </span>
                <span >
                     Text Decoration  <input
                        style={styles.input} 
                        type="search"
                        placeholder={txtDeco}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setTxtDeco(e.target.value);
                            }
                        }}
                    />
                </span>
                
                <span >
                    Text Align  <input 
                        style={styles.input}
                        type="search"
                        placeholder={txtAlign}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setTxtAlign(e.target.value);
                            }
                        }}
                    />
                </span>

                <span>
                    Font Family  <input 
                        style={styles.input}
                        type="search"
                        placeholder={fntFamily}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                if(e.target.value === '') {
                                    setFntFamily('oldtown')
                                } else {
                                    setFntFamily(e.target.value);
                                }
                            }
                        }}
                    />
                </span>

                <span>
                    Text Style  <input 
                        style={styles.input}
                        type="search"
                        placeholder={txtStyle}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setTxtStyle(e.target.value);
                            }
                        }}
                    />
                </span>
                
            </div>

            <h4 style={styles.heading4}>Button</h4>
            <div style={styles.changers}>
                
                <span >
                    Border Radius  <input 
                        style={styles.input}
                        type="search"
                        placeholder={butRadius}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setButRadius(e.target.value);
                            }
                        }}
                    />
                </span>
                <span >
                    Box Shadow  X :<input 
                        style={styles.bxshdwinput}
                        type="search"
                        placeholder={boxShadowX}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setBoxShadowX(e.target.value);
                            }
                        }}                    
                    />
                      
                    Y :<input 
                        style={styles.bxshdwinput}
                        type="search"
                        placeholder={boxShadowY}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setBoxShadowY(e.target.value);
                            }
                        }}
                    />
                    
                    Blur :<input 
                        style={styles.bxshdwinput}
                        type="search"
                        placeholder={boxShadowBlur}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setBoxShadowBlur(e.target.value);
                            }
                        }}
                    />
                </span>
                <span >
                    Shadow Color  <input 
                        style={styles.input}
                        type="search"
                        placeholder={boxShadowColor}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setBoxShadowColor(e.target.value);
                            }
                        }}
                    />
                </span>
                
                <span >
                     Font Family <input
                        style={styles.input} 
                        type="search"
                        placeholder={butFntFamily}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setButFntFamily(e.target.value);
                            }
                        }}
                    />
                </span>
                
                <span >
                    Width  <input 
                        style={styles.input}
                        type="search"
                        placeholder={butWidth}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setButWidth(e.target.value);
                            }
                        }}
                    />
                    
                    Height <input 
                        style={styles.input}
                        type="search"
                        placeholder={butHeight}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setButHeight(e.target.value);                                
                            }
                        }}
                    />
                </span>
                
            </div>
            <h4 style={styles.heading4}>List Items</h4>
            <div style={styles.changers}>
                <span >
                    Background <input
                        style={styles.input} 
                        type="search"
                        placeholder={liBgColor}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setLiBgColor(e.target.value);
                            }
                        }}
                    />
                </span>

                <span >
                    Text Color <input
                        style={styles.input} 
                        type="search"
                        placeholder={liTxtColor}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setLiTxtColor(e.target.value);
                            }
                        }}
                    />
                </span>

                <span >
                    List Width <input
                        style={styles.input} 
                        type="search"
                        placeholder={liWidth}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setLiWidth(e.target.value);
                            }
                        }}
                    />
                </span>

                <span >
                    Padding <input
                        style={styles.input} 
                        type="search"
                        placeholder={liPadding}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setLiPadding(e.target.value);
                            }
                        }}
                    />
                </span>
                
                <span >
                    List Style <input
                        style={styles.input} 
                        type="search"
                        placeholder={liStyle}
                        onKeyPress={e => {
                            if(e.key === 'Enter') {
                                setLiStyle(e.target.value);
                            }
                        }}
                    />
                </span>

            </div>
        </div>
         
    )
}


export default Card;