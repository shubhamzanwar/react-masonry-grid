import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, GridItem} from '../src/index';

const paragraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue. Fermentum et sollicitudin ac orci. Nunc faucibus a pellentesque sit amet porttitor. Dui sapien eget mi proin sed. Bibendum enim facilisis gravida neque convallis a cras. Et netus et malesuada fames ac turpis egestas sed tempus.',
    'Facilisis gravida neque convallis a cras semper auctor neque vitae. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Quis varius quam quisque id. Orci sagittis eu volutpat odio facilisis. Feugiat nibh sed pulvinar proin gravida. Nulla posuere sollicitudin aliquam ultrices sagittis. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Ipsum nunc aliquet bibendum enim. Et tortor at risus viverra adipiscing. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Viverra suspendisse potenti nullam ac tortor vitae purus.',
    'Elementum integer enim neque volutpat ac. Feugiat vivamus at augue eget arcu dictum. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue.',
    'Lacus laoreet non curabitur gravida arcu ac tortor. Sed risus ultricies tristique nulla aliquet enim tortor at. Consequat ac felis donec et odio pellentesque diam. Proin fermentum leo vel orci porta non. Lacus sed turpis tincidunt id aliquet. Libero nunc consequat interdum varius. Quis auctor elit sed vulputate.',
    'Eget aliquet nibh praesent tristique magna sit amet purus gravida.',
    'Eget arcu dictum varius duis. Tellus in metus vulputate eu scelerisque felis. Praesent tristique magna sit amet purus. Ultrices dui sapien eget mi proin sed. Aliquet nec ullamcorper sit amet risus nullam. Gravida cum sociis natoque penatibus et magnis dis. Massa ultricies mi quis hendrerit dolor magna eget est.',
    'Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Diam in arcu cursus euismod quis viverra nibh cras. Tortor dignissim convallis aenean et tortor. Eget felis eget nunc lobortis. Viverra vitae congue eu consequat ac felis. Hac habitasse platea dictumst vestibulum rhoncus. Nisl suscipit adipiscing bibendum est ultricies integer.',
    'Risus at ultrices mi tempus imperdiet nulla malesuada. Leo vel orci porta non pulvinar. Amet massa vitae tortor condimentum. Tincidunt arcu non sodales neque.',
    'Faucibus vitae aliquet nec ullamcorper sit. Urna nunc id cursus metus aliquam eleifend mi in. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Eleifend donec pretium vulputate sapien nec. Quis varius quam quisque id diam vel. Amet consectetur adipiscing elit pellentesque habitant. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Quam id leo in vitae turpis massa.',
    'Tortor condimentum lacinia quis vel eros donec ac. A lacus vestibulum sed arcu non odio euismod. Auctor eu augue ut lectus arcu bibendum at varius vel. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Nulla posuere sollicitudin aliquam ultrices sagittis. Ut lectus arcu bibendum at varius vel pharetra.',
    'Sed euismod nisi porta lorem mollis aliquam. Placerat vestibulum lectus mauris ultrices eros in cursus. Pellentesque habitant morbi tristique senectus et.',
    'Sodales ut eu sem integer vitae. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Bibendum neque egestas congue quisque egestas diam in arcu. Porttitor massa id neque aliquam vestibulum morbi. Nulla porttitor massa id neque aliquam vestibulum morbi. A lacus vestibulum sed arcu. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Ut ornare lectus sit amet est placerat. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Nisl tincidunt eget nullam non nisi est sit. In iaculis nunc sed augue lacus viverra vitae congue eu. A lacus vestibulum sed arcu. Turpis nunc eget lorem dolor sed viverra ipsum. Pellentesque id nibh tortor id aliquet lectus proin. Pharetra diam sit amet nisl suscipit.',
    'Cras adipiscing enim eu turpis egestas pretium aenean. Fermentum dui faucibus in ornare quam viverra orci sagittis. Justo nec ultrices dui sapien eget. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Elementum tempus egestas sed sed risus pretium quam. Lobortis feugiat vivamus at augue eget arcu dictum varius duis.',
    'Eu sem integer vitae justo eget magna fermentum. Ultrices vitae auctor eu augue ut lectus. Sed vulputate mi sit amet mauris. Viverra nam libero justo laoreet sit amet cursus sit. Eget duis at tellus at.',
    'acilisis gravida neque convallis a cras semper auctor. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Tortor consequat id porta nibh venenatis. Ac felis donec et odio pellentesque. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Malesuada bibendum arcu vitae elementum. Integer eget aliquet nibh praesent tristique. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Tincidunt id aliquet risus feugiat in. Eget mi proin sed libero enim sed faucibus turpis.',
    'Velit ut tortor pretium viverra suspendisse potenti. Interdum consectetur libero id faucibus nisl. Luctus accumsan tortor posuere ac ut consequat semper viverra. Malesuada fames ac turpis egestas integer eget. Egestas diam in arcu cursus euismod. Risus commodo viverra maecenas accumsan. Nunc mattis enim ut tellus elementum. Nulla at volutpat diam ut venenatis tellus in. Feugiat sed lectus vestibulum mattis ullamcorper velit.'
];

const App = () => {
    return <Grid gutter={10} columnWidth={200} rowHeight={10}>
        {paragraphs.map((paragraph) => (
            <GridItem>
                <div style={{border: '1px solid black', overflowWrap: 'break-word'}}>
                    <p>{paragraph}</p>
                </div>
            </GridItem>
        ))}
    </Grid>
}

ReactDOM.render(<App />, document.getElementById('root'));