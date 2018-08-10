import React, {Component} from 'react';

class Typewrite extends Component {
    componentDidMount(){
        let self = this;
        let array = self.props.items;
        let i = 0;
        function summonChunk(pos){

        let string = array[pos];

            let typing = setInterval(function(){
            let display = self.state.word + string.charAt(i);
            self.setState({word: display});
            i++
            if(i === string.length){
                clearInterval(typing);

                setTimeout(function(){
                    let deleting = setInterval(function(){
                        let display = self.state.word.slice(0,i);
                        self.setState({word: display})
                        i--
    
                        if(i === -1){
                            clearInterval(deleting);
                            if(pos===array.length-1){
                                pos = -1
                            }
                            i=0;
                            setTimeout(function(){summonChunk(pos+1)},1250)
                        }
                    },40)
                },1500)
            }
        },70)
        }


        setTimeout(function(){
            summonChunk(0)
        },1500);
    }

    constructor(props){
      super(props);
      this.state = {word: ""};
    };
render(){
return(
<h1 id="typewrite">{this.state.word}</h1>
);
}
};

export default Typewrite;