import{_ as n,c as s,o as a,e}from"./app.3e464938.js";const p={},t=e(`<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="form-wizard-props" tabindex="-1"><a class="header-anchor" href="#form-wizard-props" aria-hidden="true">#</a> Form Wizard props</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;Awesome Wizard&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subtitle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;Split a complicated flow in multiple steps&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">nextButtonText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;Next&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">backButtonText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;Back&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">finishButtonText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;Finish&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">stepSize</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;md&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> acceptedValues <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;xs&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sm&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lg&#39;</span><span class="token punctuation">]</span>
      <span class="token keyword">return</span> acceptedValues<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/***
  *  Sets validation (on/off) for back button. By default back button ignores validation
  */</span>
  <span class="token literal-property property">validateOnBack</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/***
  * Applies to text, border and circle
  */</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;#e74c3c&#39;</span> <span class="token comment">//circle, border and text color</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/***
  *  Is set to current step and text when beforeChange function fails 
  */</span>
  <span class="token literal-property property">errorColor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;#8b0000&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
  * Can take one of the following values: &#39;circle|square|tab\`
  */</span>
  <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
  * name of the transition when transition between steps
  */</span>
  <span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">//name of the transition when transition between steps</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/***
  * Index of the initial tab to display
  */</span>
  <span class="token literal-property property">startIndex</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tab-content-props" tabindex="-1"><a class="header-anchor" href="#tab-content-props" aria-hidden="true">#</a> Tab content props</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/***
   * Icon name for the upper circle corresponding to the tab
   * Supports themify icons only for now.
   */</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/***
   * Only render the content when the tab is active
   */</span>
  <span class="token literal-property property">lazy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/***
   * Function to execute before tab switch. Return value must be boolean
   * If the return result is false, tab switch is restricted
   */</span>
  <span class="token literal-property property">beforeChange</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Function
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[t];function l(i,r){return a(),s("div",null,o)}const u=n(p,[["render",l],["__file","index.html.vue"]]);export{u as default};
