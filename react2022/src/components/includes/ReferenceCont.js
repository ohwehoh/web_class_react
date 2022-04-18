import React from 'react'

function ReferInfo({head, title, desc}){
    return (
        <tr>
            <td>{head}</td>
            <td>{title}</td>
            <td>{desc}</td>
        </tr>
    )
  }

const referText = [
    {
      head : "A",
      title : "align-content",
      desc : "align-content 속성은 콘텐츠의 상하관계 정렬 상태를 정의합니다."
    },
    {
      head : "",
      title : "align-items",
      desc : "align-items 속성은 콘텐츠 내부의 정렬 상태를 정의합니다."
    },
    {
        head : "",
        title : "all",
        desc : "all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다."
    },
    {
        head : "",
        title : "animation",
        desc : "animation 속성은 애니메이션을 설정합니다."
    },
    {
        head : "",
        title : "animation-delay",
        desc : "animation-delay 속성은 요소가 로드된 후 애니메이션이 시작될 때 까지의 시간을 나타냅니다."
    },
    {
        head : "",
        title : "animation-direction",
        desc : "animation-direction 속성은 애니메이션 움직임 방향을 설정합니다."
    },
    {
        head : "",
        title : "animation-duration",
        desc : "animation-duration 속성은 애니메이션 움직임 시간을 설정합니다."
    },
    {
        head : "",
        title : "animation-fill-mode",
        desc : "animation-fill-mode 속성은 애니메이션이 끝난 후의 상태를 설정합니다."
    },
    {
        head : "",
        title : "animation-iteration-count",
        desc : "animation-iteration-count 속성은 애니메이션 반복 횟수 설정합니다."
    },
    {
        head : "",
        title : "animation-name",
        desc : "animation-name 속성은 애니메이션 keyframe 이름을 설정합니다."
    },
    {
        head : "",
        title : "animation-play-state",
        desc : "animation-play-state 속성은 애니메이션 진행상태를 설정합니다."
    },
    {
        head : "",
        title : "animation-timing-function",
        desc : "animation-play-state 속성은 애니메이션 진행상태를 설정합니다."
    },
    {
        head : "B",
        title : "backface-visibility",
        desc : "backface-visibility 속성은 요소의 뒷면을 정의합니다."
    },
    {
        head : "",
        title : "background",
        desc : "background 속성은 단축 속성으로 하나의 선언으로 배경 속성 값을 정의합니다."
    },
    {
        head : "",
        title : "animation-fill-mode",
        desc : "animation-fill-mode 속성은 애니메이션이 끝난 후의 상태를 설정합니다."
    },
    {
        head : "",
        title : "background-attachment",
        desc : "background-attachment 속성은 배경이미지의 고정여부를 설정하기 위한 속성입니다."
    },
    {
        head : "",
        title : "background-blend-mode",
        desc : "background-blend-mode 속성은 각 배경 레이어의 혼합 모드를 정의합니다."
    },
    {
        head : "",
        title : "background-clip",
        desc : "background-clip 속성은 요소의 배경이 테두리, 안쪽 여백, 콘텐츠 상자 중 어디까지 차지할 지 지정합니다."
    },
    {
        head : "",
        title : "background-color",
        desc : "background-color 속성은 요소의 배경 색을 지정합니다."
    },
    {
        head : "",
        title : "background-image",
        desc : "background-image 속성은 요소의 배경 이미지를 한 개나 여러 개 지정합니다."
    },
    {
        head : "",
        title : "background-origin",
        desc : "background-origin 속성은 배경 이미지의 위치를 어디서부터 시작할지 지정합니다."
    }
    
  ]

function ReferenceCont() {
  return (
    <section className="refer__cont">
        <div className="container">
            <div className="refer__inner">
                <h2>CSS REFERENCE</h2>
                <table>
                    <colgroup>
                        <col style={{ width: '10%'}}/>
                        <col style={{ width: '20%'}}/>
                        <col style={{ width: '70%'}}/>
                    </colgroup>
                    <thead>
                        <tr>
                            <td>init</td>
                            <td>name</td>
                            <td>desc</td>
                        </tr>
                    </thead>
                    <tbody>
                    {referText.map((txt) => (
                        <ReferInfo 
                            key = {txt.title}
                            head = {txt.head}
                            title = {txt.title}
                            desc = {txt.desc}
                        />
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}

export default ReferenceCont