import React from 'react'
import ReactDOM from 'react-dom'
import ReactTooltip from 'react-tooltip'
//import Select from 'react-select' 

// with image import
import IconA from '../public/image/A.png'; 
import IconB from '../public/image/B.png';
import IconC from '../public/image/C.png';
import IconD from '../public/image/D.png';

let A_crop = 100;
let B_crop = 100;
let C_crop = 100;
let D_crop = 100;
let A_cropd = 0;
let B_cropd = 0;
let C_cropd = 0;
let D_cropd = 0;

let crop_count_A = 0;
let crop_count_B = 0;
let crop_count_C = 0;
let crop_count_D = 0;


let footer_text= []; //投稿内容(footer)
let footer_value = []; //投稿者(footer)
let footer_value2 = []; //投稿相手(footer)
let footer_text_crop = [];

let nitizi = new Date(); //日時を取得
let year = []; //西暦
let month = []; //月
let date = []; //日
let hour = []; //時
let minute = []; //分

let all_text = []; //footerに表示されるもの
let count = 0; //配列で使用するカウント(投稿ボタン)
//let count2 = 0; //配列で使用するカウント(いいねボタン)

let text_crop = 0; //投稿に'いいね'された数


class Default extends React.Component {
  //初期化処理
  constructor(props) {
    super(props);
    this.state = {
                  value: 'A',
                  value2: 'B',
                  text:'',
                  textCrop: text_crop,
                  cropA: A_crop,
                  cropdA: A_cropd,
                  cropB: B_crop,
                  cropdB: B_cropd,
                  cropC: C_crop,
                  cropdC:C_cropd,
                  cropD: D_crop,
                  cropdD: D_cropd,
                  count_A: crop_count_A,
                  count_B: crop_count_B,
                  count_C: crop_count_C,
                  count_D: crop_count_D,
                  good:[]
                  };
    
    


    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChangetext = this.handleChangetext.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    
  }

  //ユーザー名をプルダウンで選択(投稿者)
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  //ユーザー名をプルダウンで選択(投稿相手)
  handleChange2(event) {
    this.setState({value2: event.target.value});
  }

  //テキストボックスに入力した内容
  handleChangetext(event) {
    this.setState({text: event.target.value});
  }

  //投稿ボタンのイベント処理
  handleSubmit2(event) {
    
    this.setState({text: this.state.text});
    
    footer_text = (this.state.text);
    footer_value[count] = (this.state.value);
    footer_value2[count] = (this.state.value2);
    footer_text_crop[count] = (this.state.textCrop);


    
    nitizi = new Date();
    year = nitizi.getFullYear();
    month = ('0' + (nitizi.getMonth()+1)).slice(-2);
    date = ('0' + (nitizi.getDate())).slice(-2);
    hour = ('0' + (nitizi.getHours())).slice(-2);
    minute = ('0' + (nitizi.getMinutes())).slice(-2);

    for(let i = 0; i < Math.floor(count / 2); i++){
      let s = all_text[i];
      let t = footer_value[i];
      let u = footer_value2[i];
      all_text[i] = all_text[count - i - 1];
      footer_value[i] = footer_value[count - i - 1];
      footer_value2[i] = footer_value2[count - i - 1];
      all_text[count - i - 1] = s;
      footer_value[count - i - 1] = t;
      footer_value2[count - i - 1] = u;
    }

    all_text[count] = ('投稿内容' + footer_text + ',投稿者:' + footer_value[count] + ',投稿相手:' + footer_value2[count] + 
                      ' ' + year + '/' + month + '/' + date + ' ' + hour + ':' + minute);
    
    count = count + 1;
    for(let i = 0; i < Math.floor(count / 2); i++){
      let s = all_text[i];
      let t = footer_value[i];
      let u = footer_value2[i];
      all_text[i] = all_text[count - i - 1];
      footer_value[i] = footer_value[count - i - 1];
      footer_value2[i] = footer_value2[count - i - 1];
      all_text[count - i - 1] = s;
      footer_value[count - i - 1] = t;
      footer_value2[count - i - 1] = u;
    }

    this.setState({text: []});
    this.setState({count_A: 0});
    
    event.preventDefault();
    
  }

  //'いいね'ボタンのイベント処理
  handleSubmit(event) {
    //alert('Your favorite flavor is: ' + this.state.value);

    this.setState({good: event.target.id})
    if(footer_value[count - 1] == 'A' || footer_value2[count - 1] == 'A'){ //投稿者または投稿相手が'A'の時

      this.setState({cropdA: this.state.cropdA + 1});
      if(this.state.value == 'A' && this.state.count_A < 15 && this.state.cropA > 0){ //現在の投稿者が'A'の時
        this.setState({cropA: this.state.cropA - 2});
        this.setState({count_A: this.state.count_A + 1});
      }

      if(this.state.value == 'B' && this.state.count_B < 15 && this.state.cropB > 0){
        this.setState({cropB: this.state.cropB - 2});
        this.setState({count_B: this.state.count_B + 1});
      }

      if(this.state.value == 'C' && this.state.count_C < 15 && this.state.cropC > 0){
        this.setState({cropC: this.state.cropC - 2});
        this.setState({count_C: this.state.count_C + 1});
      }

      if(this.state.value == 'D' && this.state.count_D < 15 && this.state.cropD > 0){
        this.setState({cropD: this.state.cropD - 2});
        this.setState({count_D: this.state.count_D + 1});
      }

    }

    if(footer_value[count - 1] == 'B' || footer_value2[count -1] == 'B'){
      
      this.setState({cropdB: this.state.cropdB + 1});
      if(this.state.value == 'A' && this.state.count_A < 15 && this.state.cropA > 0){
        this.setState({cropA: this.state.cropA - 2});
        this.setState({count_A: this.state.count_A + 1});
      }

      if(this.state.value == 'B' && this.state.count_B < 15 && this.state.cropB > 0){
        this.setState({cropB: this.state.cropB - 2});
        this.setState({count_B: this.state.count_B + 1});
      }

      if(this.state.value == 'C' && this.state.count_C < 15 && this.state.cropC > 0){
        this.setState({cropC: this.state.cropC - 2});
        this.setState({count_C: this.state.count_C + 1});
      }

      if(this.state.value == 'D' && this.state.count_D < 15 && this.state.cropD > 0){
        this.setState({cropD: this.state.cropD - 2});
        this.setState({count_D: this.state.count_D + 1});
      }

    }

    if(footer_value[count - 1] == 'C' || footer_value2[count -1] == 'C'){
      
      this.setState({cropdC: this.state.cropdC + 1});
      if(this.state.value == 'A' && this.state.count_A < 15 && this.state.cropA > 0){
        this.setState({cropA: this.state.cropA - 2});
        this.setState({count_A: this.state.count_A + 1});
      }

      if(this.state.value == 'B' && this.state.count_B < 15 && this.state.cropB > 0){
        this.setState({cropB: this.state.cropB - 2});
        this.setState({count_B: this.state.count_B + 1});
      }

      if(this.state.value == 'C' && this.state.count_C < 15 && this.state.cropC > 0){
        this.setState({cropC: this.state.cropC - 2});
        this.setState({count_C: this.state.count_C + 1});
      }

      if(this.state.value == 'D' && this.state.count_D < 15 && this.state.cropD > 0){
        this.setState({cropD: this.state.cropD - 2});
        this.setState({count_D: this.state.count_D + 1});
      }

    }

    if(footer_value[count - 1] == 'D' || footer_value2[count -1] == 'D'){
      
      this.setState({cropdD: this.state.cropdD + 1});
      if(this.state.value == 'A' && this.state.count_A < 15 && this.state.cropA > 0){
        this.setState({cropA: this.state.cropA - 2});
        this.setState({count_A: this.state.count_A + 1});
      }

      if(this.state.value == 'B' && this.state.count_B < 15 && this.state.cropB > 0){
        this.setState({cropB: this.state.cropB - 2});
        this.setState({count_B: this.state.count_B + 1});
      }

      if(this.state.value == 'C' && this.state.count_C < 15 && this.state.cropC > 0){
        this.setState({cropC: this.state.cropC - 2});
        this.setState({count_C: this.state.count_C + 1});
      }

      if(this.state.value == 'D' && this.state.count_D < 15 && this.state.cropD > 0){
        this.setState({cropD: this.state.cropD - 2});
        this.setState({count_D: this.state.count_D + 1});
      }

    }

   
    event.preventDefault();
  }

  //html
  render() {

    const list = all_text.map((row, i) => { //listを一つずつ表示するため
      return(
       <li key={i}>
         <form id={i} onSubmit={this.handleSubmit}>
           <label>
            {all_text[i]}
            <br />

            { !((this.state.value == footer_value[i]) || (this.state.value == footer_value2[i])) && //投稿者、投稿相手は'いいね'が押せない
            (<input type="submit" value="いいね" id={i}/>)
            }
            <button type="button" data-tip={('A:' + this.state.count_A + ' B:' + this.state.count_B + ' C:' + this.state.count_C + ' D:' + this.state.count_D)}>
              {this.state.count_A + this.state.count_B + this.state.count_C + this.state.count_D}
              <ReactTooltip effect="solid" place="bottom"/>
            </button>
            
          </label>
          <br />
        </form>
      </li>
      );
    });

    return (

      <div>
        
        <header style={styles.header}>
        
          {this.state.value == "A" &&  
          (<p><img src={IconA} alt="A" align="middle"/> 
          拍手できる数:{this.state.cropA} 拍手された数:{this.state.cropdA} <br clear="middle" /> </p>)}
          {this.state.value == "B" &&  
          (<p><img src={IconB} alt="B" align="middle"/> 
          拍手できる数:{this.state.cropB} 拍手された数:{this.state.cropdB} <br clear="middle" /> </p>)}
          {this.state.value == "C" &&  
          (<p><img src={IconC} alt="C" align="middle"/> 
          拍手できる数:{this.state.cropC} 拍手された数:{this.state.cropdC} <br clear="middle" /> </p>)}
          {this.state.value == "D" &&  
          (<p><img src={IconD} alt="D" align="middle"/> 
          拍手できる数:{this.state.cropD} 拍手された数:{this.state.cropdD} <br clear="middle" /> </p>)}

          投稿者:              
          <select value={this.state.value} onChange={this.handleChange}>
            <option selected value="A">Aさん</option>
            <option value="B">Bさん</option>
            <option value="C">Cさん</option>
            <option value="D">Dさん</option>
          </select>

        </header>

        <main style={styles.main}>

          {this.state.value2 == "A" &&  
          (<p><img src={IconA} alt="A" align="middle"/> 
          <form onSubmit={this.handleSubmit2}>
            <label>
              <textarea value={this.state.text} onChange={this.handleChangetext}/>
              {this.state.text.length > 4 && 
              <input type="submit" value="投稿"/>
              }
            </label>
          </form>
          <br clear="middle" /> </p>)}
          

          {this.state.value2 == "B" &&  
          (<p><img src={IconB} alt="B" align="middle"/> 
          <form onSubmit={this.handleSubmit2}>
            <label>
              <textarea value={this.state.text} onChange={this.handleChangetext}/> 
              {this.state.text.length > 4 &&
              <input type="submit" value="投稿"/>
              }
            </label>
          </form>
          <br clear="middle" /> </p>)}

          {this.state.value2 == "C" &&  
          (<p><img src={IconC} alt="C" align="middle"/>
          <form onSubmit={this.handleSubmit2}>
            <label>
              <textarea value={this.state.text} onChange={this.handleChangetext}/> 
              {this.state.text.length > 4 &&
              <input type="submit" value="投稿"/>
              }
            </label>
          </form>
          <br clear="middle" /> </p>)}

          {this.state.value2 == "D" &&  
          (<p><img src={IconD} alt="D" align="middle"/> 
          <form onSubmit={this.handleSubmit2}>
            <label>
              <textarea value={this.state.text} onChange={this.handleChangetext}/> 
              {this.state.text.length > 4 &&
              <input type="submit" value="投稿"/>
              }
            </label>
          </form>
          <br clear="middle" /> </p>)}

          投稿相手:
                        
          <select value={this.state.value2} onChange={this.handleChange2}>
            <option value="A">Aさん</option>
            <option selected value="B">Bさん</option>
            <option value="C">Cさん</option>
            <option value="D">Dさん</option>
          </select>
          
        </main> 

        <footer style={styles.footer}>

          <p>
            <ul>{list}</ul>
          </p>

        </footer>

      </div>
    );
  }
}

export default Default; //

//css スタイル処理
const styles = {
  header: {
      height: 200,
      background: "#ddd",
  },
  main: {
      height: 400,
  },
  footer: {
      height: 400,
      background: "#ddd",
  }
}



ReactDOM.render(<Default />, document.getElementById('root')) //書き込み(最後の処理)