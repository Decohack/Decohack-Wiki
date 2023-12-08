---
title: APP运营模式名词解释
date: 2023/12/02 12:04:00
---

::: tip 介绍
了解这些基础术语可以帮助你了解产品从0到1的整个过程，这个列表是为了先告诉你有什么，有个概念之后，再根据自己不懂的或者感兴趣的方面去查 ChatGPT。内容来源：[知乎](https://zhuanlan.zhihu.com/p/34270249)
:::

> 💡 在 [twitter](https://twitter.com/decohack) 关注我， 分享更多独立开发者相关的信息

### APP运营模式名词解释

#### 1. AARRR模型
AARRR模型包括5个重要环节：

1. **获取用户 (Acquisition)**
   第一步是获取用户，通常关注的数据是下载量和激活量（即新增用户数量）。

2. **提高活跃度 (Activation)**
   重要因素包括推广渠道的质量和产品本身在最初使用的几十秒钟内的表现。
   关注数据：DAU（日活跃用户）、MAU（月活跃用户）、每次启动平均使用时长和每个用户每日平均启动次数。

3. **提高留存率 (Retention)**
   解决用户流失问题，关注日留存率、周留存率、月留存率等指标。

4. **获取收入 (Revenue)**
   收入来源包括付费应用、应用内付费、广告。
   关注数据：ARPU（平均每用户每月收入）。

5. **自传播 (Refer)**
   基于社交网络的病毒式传播，成本低且效果可能非常好。

#### 2. DNU（Daily New Users）
每日激活/注册的用户数。

#### 3. CAC（Customer Acquisition Cost）
用户获取成本。

#### 4. CPC(Cost Per Customer)
用户获取成本 = 推广成本/有效新增用户。

#### 5. CR(Conversions Rates)
注册转化率 = 最终注册成为用户/访问了某种渠道的总人数。

#### 6. DAU（Daily Active Users）
日活跃用户数。

#### 7. WAU（Weekly Active Users）
周活跃用户数。

#### 8. MAU（Monthly Active Users）
月活跃用户数。

#### 9. DEC（Daily Engagement Count）
日参与次数，多用于游戏。

#### 10. DAOT/AT（Daily Avg. Online Time）
活跃用户平均每日在线时长 = 日总在线时长/日活跃用户数。  

#### 11.DAU (Daily Active User)
日活跃用户数量

#### 12.MAU(Monthly active users)
月活，月活跃用户数量

#### 13.Users Retention 用户留存
统计时间区间内，新增用户在随后不同时期的启动使用情况。Day 1/3/7/30 Retention Ratio次日/三日/七日/月留存率，日新增用户在次日/第三日/第七日/第三十日（不含首次启动当天）启动的用户数占新增用户比例。留存率需要进行长期跟踪，根据需要可设定30日、60日或者90日。

#### 14.Users Churn
用户流失，统计时间区间内，用户在不同时期离开产品的情况。

#### 15.Day 1 Churn Ratio
日流失率，统计日使用产品，但随后七日未使用的用户占统计日活跃用户比例，此定义按需求可延长观测长度。

#### 16.Day 7 Churn Ratio
周流失率，上周使用过，但本周未使用的用户占上周周活跃用户比例。

#### 17.Day 30 Churn Ratio
月流失率，上个月使用过产品，但本月未使用的用户占上个月月活跃用户比例。

#### 18.MPR（Monthly Payment Ratio）
月付费率，统计时间区间内，付费用户占活跃用户的比例。一般以月计。计算公式：MPR=APA/MAU 其中APA为月付费用户数

#### 19.APA（Active Payment Account）
活跃付费用户数，统计时间区间内，成功付费的用户数。一般以月计。如果按月进行计算，则有以下关系：APA=MAU*MPR其中MAU为月活跃用户数，MPR为月付费率。

#### 20.ARPU（Average Revenue per Uers）
平均每用户收入，统计时间区间内，活跃用户对产品产生的平均收入。一般以月计。

#### 21.ARPU=收益/用户数 月ARPU=收益/MAU
计算方式：产品总收入除以产品的总活跃用户数，一般按照月来计算，即ARPU=月总收入/月活跃用户数（MAU）

#### 22.ARPPU（Average Revenue per Paying User）
平均每付费用户收入，统计时间区间内，付费用户对产品贡献的平均收入。一般以月计。

ARPPU=收益/付费用户数 Life Time生命周期 一个用户从第一次参与游戏，到最后一次参与游戏之间的时间，一般计算平均值。

#### 23.LTV（Life Time Value）
生命周期价值 用户在生命周期内为该游戏创造的收入总计。可以看成是一个长期累计的ARPU值。

计算方式：对每个用户的平均LTV计算如下：LTV=ARPU*LT（按月计平均生命周期） 其中LT为Life Time，即生命周期，按照月统计，也就是玩家留存在游戏中的平均月的数量。

例如，一款产品的ARPU=2元，LT=5，那么LTV=2*5=10元。

#### 24.PCU（Peak Concurrent Users）
最高同时在线用户人数

#### 25.ACU（Average Concurrent Users）
平均同时在线用户人数

New Users Converstion Rate新用户转化率，可根据渠道进行划分，Clicks->Install->Register->Login

#### 26.K-Factor：K因子

#### 27.K-Factor=感染率*转化率

转化率：当感染后转化为新用户的比率。

感染率：每个用户发送的邀请数量，一般取平均值。

若K>1，产品用户群通过自传播增长较快；若K<1，产品用户群到达一定规模后就会停止通过自传播增长。