<!DOCTYPE html>
<html>
<head>
	{% include 'common/meta.tpl' %}
	{% include 'common/link.tpl' %}
</head>
<body>
	{% include 'common/header.tpl' %}
	{% include 'common/column.tpl' %}
	<div class="layui-container">
    <div class="layui-row layui-col-space15">
      <!--左侧-->
      <div class="layui-col-md8">
          <!--置顶-->
          {% include 'moadel/topList.tpl' %}
          <!--列表-->
          {% include 'moadel/list.tpl' %}
      </div>
      <!--右侧-->
      <div class="layui-col-md4">
        <!--温馨通道-->
        {% include 'moadel/modelWay.tpl' %}
        <!--签到-->
        {% include 'moadel/modelSign.tpl' %}
        <!--回帖榜-->
        {% include 'moadel/modelReply.tpl' %}
        <!--热议榜-->
        {% include 'moadel/modelHot.tpl' %}
        <!--广告-->
        {% include 'moadel/modelAdvert.tpl' %}
        <!--友链-->
        {% include 'moadel/modelLink.tpl' %}
      </div>
    </div>
  </div>
	{% include 'common/footer.tpl' %}
</body>
</html>