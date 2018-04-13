import React, { Component } from 'react';
import TextBlock from "./textBlock";
import TextareaAutosize from "react-textarea-autosize";

const App = (props) => {
    return (
        <div className="container">
            <div className="row">
                <TextBlock>
                    フィンセント・ファン・ゴッホ（Vincent van Gogh、1853年3月30日 - 1890年7月29日）は、オランダ出身でポスト印象派（後期印象派）の画家。主要作品の多くは1886年以降のフランス居住時代、特に、アルル時代とサン＝レミの精神病院での療養時代に制作された。彼の作品は感情の率直な表現、大胆な色使いで知られ、ポスト印象派の代表的画家である。フォーヴィスムやドイツ表現主義など、20世紀の美術にも大きな影響を及ぼした。
                    1853年、オランダ南部のズンデルトで牧師の家に生まれる。1869年、画商グーピル商会に勤め始め、ハーグ、ロンドン、パリで働くが、1876年、商会を解雇された。その後イギリスで教師として働いたりオランダのドルトレヒトの書店で働いたりするうちに聖職者を志すようになり、1877年、アムステルダムで神学部の受験勉強を始めるが挫折した。1878年末以降、ベルギーの炭坑地帯ボリナージュ地方で伝道活動を行ううち、画家を目指すことを決意した……
                </TextBlock>
                <TextBlock>
                    Историческая столица Великого княжества Московского, Русского царства, Российской империи (в 1728—1730 годах), Советской России и СССР. Город-герой. В Москве находятся федеральные органы государственной власти Российской Федерации (за исключением Конституционного суда), посольства иностранных государств, штаб-квартиры большинства крупнейших российских коммерческих организаций и общественных объединений.
                </TextBlock>
            </div>



            <div className="row">
                <TextareaAutosize
                    style={{
                        width: 1000,
                        height: 100,
                        background: '#F7F5F3',
                        fontFamily: '"EB Garamond", serif',
                        fontSize: '1.5em',
                        border: 'none',
                        boxSizing: 'border-box' }}
                    placeholder='minimun height is 3 rows'
                />
            </div>

            <div className="row">
                Counter: {props.counter}
            </div>

            <div className="row">
                <button className="btn btn-outline-primary" onClick={props.incrementCounter}><b>SEND</b></button><br/>
            </div>
        </div>
    );
};

export default App;