uniform float uTime;
uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
  vec4 texColor = texture2D(uTexture, vUv);
float alpha = texColor.a * 0.5;
  // ✅ 時間による透明度操作をやめて、常に見えるようにする
  gl_FragColor = vec4(texColor.rgb,alpha);
}
