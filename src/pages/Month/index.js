import { useState } from "react";
import { NavBar, DatePicker } from "antd-mobile";
import "./index.scss";
import classNames from "classnames";
import dayjs from 'dayjs'

const Month = () => {
  // 控制弹框的打开和关闭
  const [visible, setVisible] = useState(false);

  // 控制时间显示
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs(new Date()).format('YYYY-MM')
  })

  const onConfirm = (date) => {
    setVisible(false)
    const formatDate = dayjs(date).format('YYYY-MM')
    setCurrentDate(formatDate)
  }
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div
            className="date"
            onClick={() => {
                setVisible(true);
            }}
          >
            <span className="text">{currentDate}月账单</span>
            <span className={classNames('arrow', visible && 'expand')}></span>
          </div>
          {/* 统计区域 */}
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{100}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={visible}
            max={new Date()}
            onClose={() => {
                setVisible(false)
            }}
            onConfirm={onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default Month;
