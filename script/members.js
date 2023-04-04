var script = document.createElement('script');

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js');
document.head.appendChild(script);

script.addEventListener('load', function () {
  $.when(
    $.getJSON('../json/members.json'),
    // TODO: services.json is not used in the script but deleting it will affect the obj returned, change it when the data model of members.json needs to be changed to key and value pairs.
    $.getJSON('../json/services.json')
  ).done(function (data, data_services) {
    var lang = $('html').attr('lang');
    var element = '';
    var element_collaborators = '';
    var listSubNav = '';
    var listSubNav_en = '';
    var listSubNav_collaborators = '';
    var listSubNav_collaborators_en = '';
    data = data[0];
    var name_ja_order = getOrder('name ja');
    var name_en_order = getOrder('name en');
    var image_order = getOrder('画像');
    var position_ja_order = getOrder('position_ja');
    var position_en_order = getOrder('position_en');
    var keyword_order = getOrder('keyword');
    var keyword_en_order = getOrder('keyword-en');
    var orcid_order = getOrder('ORCID');
    var research_map_order = getOrder('Researchmap');
    var googleScholar_order = getOrder('Google Scholar');
    var github_order = getOrder('github');
    var mail_order = getOrder('mail');
    var website_order = getOrder('Website');
    var non_publish_order = getOrder('いずれのIDも掲載しない');

    for (var j = 1; j < data.length; j++) {
      if (
        data[j][position_ja_order].match(/客員/) ||
        data[j][position_ja_order].match(/外来/)
      ) {
        listSubNav_collaborators +=
          '<li><a href="#' +
          data[j][name_ja_order] +
          '">' +
          data[j][name_ja_order] +
          '</a></li>';
      } else {
        listSubNav +=
          '<li><a href="#' +
          data[j][name_ja_order] +
          '">' +
          data[j][name_ja_order] +
          '</a></li>';
      }
    }
    for (var j = 1; j < data.length; j++) {
      if (
        data[j][position_ja_order].match(/客員/) ||
        data[j][position_ja_order].match(/外来/)
      ) {
        listSubNav_collaborators_en +=
          '<li><a href="#' +
          data[j][name_en_order] +
          '">' +
          data[j][name_en_order] +
          '</a></li>';
      } else {
        listSubNav_en +=
          '<li><a href="#' +
          data[j][name_en_order] +
          '">' +
          data[j][name_en_order] +
          '</a></li>';
      }
    }

    function judgeExist(data, className, linkName, lang) {
      var elements = '';
      if (data) {
        if (linkName === 'Mail') {
          data = 'mailto:' + data;
        } else if (linkName === 'GitHub') {
          data = 'https://github.com/' + data;
        } else if (linkName === 'ORCID') {
          data = 'https://orcid.org/' + data;
        } else if (linkName === 'researchmap') {
          if (lang === 'en') {
            data = ' https://researchmap.jp/' + data + '?lang=en';
          } else {
            data = ' https://researchmap.jp/' + data;
          }
        }
        elements =
          '<a href="' +
          data +
          '" class="' +
          className +
          '" target="_blank">' +
          linkName +
          '</a>';
      } else {
        elements = '';
      }
      return elements;
    }

    function getOrder(target) {
      var order = 0;
      for (var i = 1; i < data.length; i++) {
        if (data[0][i] === target) {
          order = i;
        }
      }
      return order;
    }

    if (lang === 'ja') {
      $('#memberList').append(listSubNav);
      $('#memberList-collaborators').append(listSubNav_collaborators);

      for (var i = 1; i < data.length; i++) {
        var name_ja = data[i][name_ja_order];
        var name_en = data[i][name_en_order];
        var image = data[i][image_order];
        var position = data[i][position_ja_order];
        //var position_en = data[i][]
        var keyword = data[i][keyword_order];
        //var keyword_en = data[i][]
        var orcid = data[i][orcid_order];
        var research_map = data[i][research_map_order];
        var googleScholar = data[i][googleScholar_order];
        var github = data[i][github_order];
        var mail = data[i][mail_order];
        var website = data[i][website_order];
        var non_publish = data[i][non_publish_order];
        var link_section =
          judgeExist(mail, 'btn-mail', 'Mail') +
          judgeExist(github, 'btn-github', 'GitHub') +
          judgeExist(orcid, 'btn-orcid', 'ORCID') +
          judgeExist(research_map, 'btn-researchmap', 'researchmap') +
          judgeExist(googleScholar, 'btn-gs', 'Google Scholar') +
          judgeExist(website, 'btn-web', 'Website');
        if (non_publish === 'Yes') {
          link_section = judgeExist(mail, 'btn-mail', 'Mail');
        }
        if (position.match(/客員/) || position.match(/外来/)) {
          element_collaborators +=
            '<div class="content__member" id="' +
            name_ja +
            '">' +
            '<div class="repos_image">' +
            '<img src="./img/member/' +
            image +
            '" alt="' +
            name_ja +
            '" class="img_member"></div>' +
            '<ul><li class="position">' +
            position +
            '</li>' +
            '<li class="repos_name"><span class="name_ja">' +
            name_ja +
            '</span><span class="name_en">' +
            name_en +
            '</span></li>' +
            '<li class="keyword">' +
            keyword +
            '</li>' +
            '<li class="PIC">担当サービス：<div class="member-list__services"></div></li>' +
            '<li class="links"><div class="btn-box">' +
            link_section +
            '</div></li></ul></div>';
        } else {
          element +=
            '<div class="content__member" id="' +
            name_ja +
            '">' +
            '<div class="repos_image">' +
            '<img src="./img/member/' +
            image +
            '" alt="' +
            name_ja +
            '" class="img_member"></div>' +
            '<ul><li class="position">' +
            position +
            '</li>' +
            '<li class="repos_name"><span class="name_ja">' +
            name_ja +
            '</span><span class="name_en">' +
            name_en +
            '</span></li>' +
            '<li class="keyword">' +
            keyword +
            '</li>' +
            '<li class="PIC">担当サービス：<div class="member-list__services"></div></li>' +
            '<li class="links"><div class="btn-box">' +
            link_section +
            '</div></li></ul></div>';
        }
      }
    } else if (lang === 'en') {
      $('#memberList').append(listSubNav_en);
      $('#memberList-collaborators').append(listSubNav_collaborators_en);

      for (var i = 1; i < data.length; i++) {
        var name_ja = data[i][name_ja_order];
        var name_en = data[i][name_en_order];
        var image = data[i][image_order];
        var position = data[i][position_en_order];
        //var position_en = data[i][]
        var keyword = data[i][keyword_order];
        var keyword_en = data[i][keyword_en_order];
        var orcid = data[i][orcid_order];
        var research_map = data[i][research_map_order];
        var googleScholar = data[i][googleScholar_order];
        var github = data[i][github_order];
        var mail = data[i][mail_order];
        var website = data[i][website_order];
        var non_publish = data[i][non_publish_order];
        var link_section = '';
        link_section =
          judgeExist(mail, 'btn-mail', 'Mail') +
          judgeExist(github, 'btn-github', 'GitHub') +
          judgeExist(orcid, 'btn-orcid', 'ORCID') +
          judgeExist(research_map, 'btn-researchmap', 'researchmap', 'en') +
          judgeExist(googleScholar, 'btn-gs', 'Google Scholar') +
          judgeExist(website, 'btn-web', 'Website');

        if (non_publish === 'Yes') {
          link_section = judgeExist(mail, 'btn-mail', 'Mail');
        }
        if (position.match(/Guest/) || position.match(/Visiting/)) {
          element_collaborators +=
            '<div class="content__member" id="' +
            name_en +
            '">' +
            '<div class="repos_image">' +
            '<img src="./img/member/' +
            image +
            '" alt="' +
            name_en +
            '" class="img_member"></div>' +
            '<ul><li class="position">' +
            position +
            '</li>' +
            '<li class="repos_name"><span class="name_ja">' +
            name_ja +
            '</span><span class="name_en">' +
            name_en +
            '</span></li>' +
            '<li class="keyword">' +
            keyword_en +
            '</li>' +
            '<li class="PIC">Responsible for：<div class="member-list__services"></div></li>' +
            '<li class="links"><div class="btn-box">' +
            link_section +
            '</div></li></ul></div>';
        } else {
          element +=
            '<div class="content__member" id="' +
            name_en +
            '">' +
            '<div class="repos_image">' +
            '<img src="./img/member/' +
            image +
            '" alt="' +
            name_en +
            '" class="img_member"></div>' +
            '<ul><li class="position">' +
            position +
            '</li>' +
            '<li class="repos_name"><span class="name_ja">' +
            name_ja +
            '</span><span class="name_en">' +
            name_en +
            '</span></li>' +
            '<li class="keyword">' +
            keyword_en +
            '</li>' +
            '<li class="PIC">Responsible for：<div class="member-list__services"></div></li>' +
            '<li class="links"><div class="btn-box">' +
            link_section +
            '</div></li></ul></div>';
        }
      }
    }
    $('#member-list').append(element);
    $('#member-list-collaborators').append(element_collaborators);

    //担当サービスの実装

    data_services = data_services[0];
    data_services = data_services.filter((data) => {
      return data['掲載'] === true;
    });

    $('.btn-mail').each(function () {
      const mail = $(this).attr('href').replace('mailto:', '');
      let charged_services = data_services
        .filter((service) => {
          return (
            service['担当者1'] === mail || service['担当者2'] === mail || service['担当者3'] === mail
          );
        })
        .map((service) => service['services_name_en']);
      console.log(`🤖\x1B[40;93;1mcharged_services: \x1B[m` ,charged_services)
      if (charged_services.length > 0) {
        var charge_tag = $(this)
          .parent()
          .parent()
          .siblings('.PIC')
          .find('.member-list__services');
        $(charge_tag).text(charged_services.join(',').replace(/,/g, ', '));
      } else {
        var charge_tag = $(this).parent().parent().siblings('.PIC');
        $(charge_tag).remove();
      }
    });
  });

  $(document).on('click', '#memberList li a', function () {
    setTimeout(function () {
      var offset = $(window).scrollTop();
      var windowHeight = $(window).height();
      var offsetPlus = offset - windowHeight * 0.4;
      $(window).scrollTop(offsetPlus);
    }, 0);
  });
});
